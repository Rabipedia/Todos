import React from "react";
import shortid from 'shortid';
import TableView from './tableview/index';
import ListView from './listview/index';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import CreateTodoForm from "../create-todo-form";
import Controller from "../controllers";

class Todos extends React.Component {
    state = {
        todos: [
            {
                id: 'nasjnznxjbnsk',
                text: 'main todo text',
                description: 'simple description',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
            {
                id: 'nasjjaklcznxjbnsk',
                text: 'main todo two',
                description: 'simple description',
                time: new Date(), 
                isComplete: false,
                isSelect: false
            },
            {
                id: 'cnjvnsoka',
                text: 'next task',
                description: 'simple description',
                time: new Date(), 
                isComplete: false,
                isSelect: false
            }          
        ],
        isOpenTodoForm: false,
        searchTerm: '',
        view: 'list',
        filter: 'all'
    };
    

    toggleSelect = todoId => {
        const todos = [...this.state.todos];
        const todo = todos.find( t => t.id === todoId);
        todo.isSelect = !todo.isSelect;

        this.setState({todos});
    };

    toggleComplete = todoId => {
        const todos = [...this.state.todos];
        const todo = todos.find(t => t.id === todoId);
        todo.isComplete = !this.isComplete;

        this.setState({todos});
    };

    toggleForm = () => {
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm
        })
    };

    handleSearch = value => {
        this.setState({
            searchTerm: value
        })
    };
  //  console.log(this.state.todos)
    createTodo = todo => {    
        todo.id = shortid.generate();
        todo.time = new Date();
        todo.isComplete = false;
        todo.isSelect = false;

        const todos = [todo, ...this.state.todos]
        this.setState({todos})
     //   console.log(this.state.todos)
        this.toggleForm();
     };

     handleFilter = filter => {
        this.setState({filter})
     };

     changeView = event => {
        this.setState({
            view: event.target.value
        })
     };

     clearSelected = () => {
        const todos = this.state.todos.filter(todo => !todo.isSelect);
        this.setState({todos})
     };

     clearCompleted = () => {
        const todos = this.state.todos.filter(todo => !todo.isComplete);
        this.setState({todos})
     };

     reset = () => {
        this.setState({
            filter: 'all',
            searchTerm: '',
            view: 'list',
            isOpenTodoForm: false
        })
     };

     performFilter = todos => {
        const {filter} = this.state;
        if(filter === 'completed') {
            return todos.filter(todo => todo.isComplete)
        } else if (filter === 'running') {
            return todos.filter(todo => !todo.isComplete)
        } else {
            return todos
        }
     };

     performSearch = () => {
        return this.state.todos.filter(todo => todo.text.toLowerCase().includes(this.state.searchTerm));
     };

     getView = () => {
        let todos = this.performSearch();
        todos = this.performFilter(todos)
        return this.state.view === 'list' ? (
            <ListView
                        todos={todos}
                        toggleSelect={this.toggleSelect}
                        toggleComplete={this.toggleComplete}
            />
        ) : (
            <TableView
                        todos={todos}
                        toggleSelect={this.toggleSelect}
                        toggleComplete={this.toggleComplete}
            />
        )
     }

    render() {
        return (
            <div>
                <h1 className="display-4 text-center mb-3">Stack Todos</h1>
                <Controller
                    term={this.state.searchTerm}
                    view={this.state.view}
                    toggleForm={this.toggleForm}
                    handleSearch={this.handleSearch}
                    handleFilter={this.handleFilter}
                    changeView={this.changeView}
                    clearSelected={this.clearSelected}
                    clearCompleted={this.clearCompleted}
                    reset={this.reset}
                />
                <div>
                    {this.getView()}
                </div>
                <Modal 
                    isOpen={this.state.isOpenTodoForm}
                    toggle={this.toggleForm}
                >
                    <ModalHeader toggle={this.toggleForm}
                    >
                        Create New Todo Item
                    </ModalHeader>
                    <ModalBody>
                        <CreateTodoForm
                            createTodo={this.createTodo}
                        />
                    </ModalBody>   
                </Modal>
            </div>
        )
    }
}

export default Todos
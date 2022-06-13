import React from "react";
import TableView from '../todos/tableview/index';
import ListView from '../todos/listview/index';

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
                id: 'nasjadznxjbnsk',
                text: 'main todo text',
                description: 'simple description',
                time: new Date(),
                isComplete: false,
                isSelect: false
            }
            
        ]
    };

    toggleSelect = todoId => {};

    toggleComplete = todoId => {};
    render() {
        return (
            <div>
                <h1 className="display-4 text-center mb-3">Stack Todos</h1>
                <div>
                    <ListView
                        todos={this.state.todos}
                        toggleSelect={this.toggleSelect}
                        toggleComplete={this.toggleComplete}
                    />
                </div>
                <div>
                    <TableView
                        todos={this.state.todos}                    toggleSelct={this.toggleSelect}
                        toggleComplete={this.toggleComplete}
                    />
                </div>
            </div>
        )
    }
}

export default Todos
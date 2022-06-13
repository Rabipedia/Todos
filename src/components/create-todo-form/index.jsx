import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';



class CreateTodoForm extends React.Component {
    state = {
        text: '',
        description: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventdefault();
        this.props.createTodo(this.state);
        event.target.reset();
        this.setState({text: '', description: ''})
    }

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Enter task</Label>
                    <Input
                        placeholder='do some code'
                        name='text'
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Describe task</Label>
                    <Input
                        type='textarea'
                        placeholder='write some sort of description about your task'
                        name='text'
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button type='submit'>Create Task</Button>
            </Form>
        )
    }
}

CreateTodoForm.propTypes = {
    createTodo: PropTypes.func.isRequired
}

export default CreateTodoForm;
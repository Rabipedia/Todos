import React from 'react';
import PropTypes from 'prop-types';
import { CustomInput, Button} from 'reactstrap';



const RowItem = ({ todo, togglSelect, toggleComplete }) => {
    return (
        <tr>
            <td>
                <CustomInput
                    type='checkbox'
                    id={todo.id}
                    checked={todo.isSelect}
                    onChange={() => togglSelect(todo.id)}
                />
            </td>
            <td>
                {todo.time.toDateString()}
            </td>
            <td>{todo.text}</td>
            <td>
                <Button color={todo.isComplete ? 'danger' : 'success'} onClick={()=> toggleComplete(todo.id)}>
                    {
                        todo.isComplete ? 'Completed' : 'Running'
                    }

                </Button>
            </td>
        </tr>
    )
};

RowItem.propTypes = {
    todo: PropTypes.object.isRequired,
    togglSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
};

export default RowItem;
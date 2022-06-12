import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import RowItem from './tableitem';

const TableView = ({ todos, toggleSelct, toggleComplete }) => {
    <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Time</th>
                <th>Todo</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                todos.map(todo => {
                    <RowItem
                        key={todo.id}
                        todo={todo}
                        togglSelect={toggleSelct}
                        toggleComplete={toggleComplete}
                    />
                })
            }
        </tbody>
    </Table>
};

TableView.propTypes = {
    todo: PropTypes.object.isRequired,
    togglSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
};

export default TableView;
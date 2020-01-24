import React from "react";
import './todo.scss';
import TodoItem from "./TodoItem";

const TodoList = ({ todos , onDeleted, onReset, done, inProgress }) => {
    const todosTasks = todos.map((item) => {
        return (
            <li key={item.id} className='todo-item-wrapper'>
                <TodoItem id={item.id} taskname={item.taskName}
                onDeleted={ () => onDeleted(item.id) }
                done={item.done}
                inProgress={item.inProgress}
                />
            </li>
        )
    });

    return (
        <div className='todo-list-wrapper'>
            <h1 className='todo-title'>What status of your tasks?</h1>
            <ul className='todo-list'>
                { todosTasks }
            </ul>
        </div>
    );
};


export default TodoList;
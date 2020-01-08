import React from "react";
import './todo.scss';
import TodoItem from "./TodoItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRetweet} from "@fortawesome/free-solid-svg-icons";

const TodoList = ({ todos , onDeleted, onReset }) => {
    const todosTasks = todos.map((item) => {
        return (
            <li key={item.id} className='todo-item-wrapper'>
                <TodoItem id={item.id} taskname={item.taskName}
                onDeleted={ () => onDeleted(item.id) }
                onReset={ () => onReset(item.id) }
                />
            </li>
        )
    });

    return (
        <div className='todo-list-wrapper'>
            <h1 className='todo-title'>What tasks do you done?</h1>
            <ul className='todo-list'>
                { todosTasks }
            </ul>

            <div className='reset-button-wrapper'>
                <button type='button' className='btn btn-todo btn-reset' onClick={onReset}>
                    <span>Reset</span>
                    <FontAwesomeIcon icon={faRetweet}/>
                </button>
            </div>
        </div>
    );
};


export default TodoList;
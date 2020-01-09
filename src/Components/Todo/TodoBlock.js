import React, {Component} from "react";
// import todoJson from '../../data/todo.json';
import TodoList from "./TodoList";
import './todo.scss';
import TodoItemForm from "./TodoItemForm";

class TodoBlock extends Component {
    state = {
        todosData: [
            {
                "id": 1,
                "taskName": "Make coffee",
                "done": false,
                "inProgress": false
            },
            {
                "id": 2,
                "taskName": "Make JS functionality",
                "done": false,
                "inProgress": false
            },
            {
                "id": 3,
                "taskName": "Make Drupal functionality",
                "done": false,
                "inProgress": false
            },
            {
                "id": 4,
                "taskName": "Make Mobile Apps",
                "done": false,
                "inProgress": false
            },
            {
                "id": 5,
                "taskName": "Make your team happy ;D",
                "done": false,
                "inProgress": false
            }
        ]
    };

    lastId = [...this.state.todosData].pop().id + 1;

    removeTask = (id) => {
        this.setState(({todosData}) => {
            const idx = todosData.findIndex((el) => el.id === id);
            const newTodos = [
                ...todosData.slice(0, idx),
                ...todosData.slice(idx + 1)
            ];

            return {
                todosData: newTodos
            }
        });
    };

    addTodoItem = (text) => {
        const newTodoItem = {
            "id": this.lastId++,
            "taskName": text,
            "done": false,
            "inProgress": false
        };

        this.setState(({ todosData }) => {
            const newTodos = [
                ...todosData,
                newTodoItem
            ];

            return {
                todosData: newTodos
            }
        });
    };

    render() {
        return (
            <div className='todo-block-wrapper'>
                <TodoList todos={this.state.todosData} onDeleted={ this.removeTask }/>
                <TodoItemForm onAddTodo={this.addTodoItem}/>
            </div>
        );
    }
}

export default TodoBlock;
import React, {Component} from "react";
import todoJson from '../../data/todo.json';
import TodoList from "./TodoList";
import './todo.scss';
import TodoItemForm from "./TodoItemForm";
import axios from 'axios';

class TodoBlock extends Component {
    state = {
        todosData: JSON.parse(JSON.stringify(todoJson)),
    };

    lastId = [...this.state.todosData].pop().id + 1;

    componentDidMount() {
        axios.get('http://5e0f48f09576aa0014666536.mockapi.io/todos').then(function (response) {
            // handle success
            this.setState(state => ({
                 todosData: JSON.parse(JSON.stringify(response.data)),
                })
            );
        }.bind(this));
    }

    removeTask = (id) => {
        const url = 'http://5e0f48f09576aa0014666536.mockapi.io/todos/';

        axios.delete(url + id).then(function (response) {
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
        }.bind(this));
    };

    addTodoItem = (text) => {
        const newTodoItem = {
            "id": this.lastId++,
            "taskName": text,
            "done": false,
            "inProgress": false
        };

        axios.post('http://5e0f48f09576aa0014666536.mockapi.io/todos', newTodoItem)
            .then(function (response) {
                this.setState(({ todosData }) => {
                    const newTodos = [
                        ...todosData,
                        newTodoItem
                    ];

                    return {
                        todosData: newTodos
                    }
                });
            }.bind(this));
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
import React, {Component} from "react";
import axios from 'axios';
import TodoList from "./TodoList";
import './todo.scss';
import TodoItemForm from "./TodoItemForm";

class TodoBlock extends Component {
    state = {
        todosData: [{}],
        response: false
    };


    componentDidMount() {
        axios.get('http://5e0f48f09576aa0014666536.mockapi.io/todos').then(function (response) {

            this.setState(state => ({
                 todosData: response.data,
                }));
        }.bind(this)).then((response) => {
            this.setState({response: true})
        })
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
        let lastId = Number([...this.state.todosData].pop().id) + 1;

        const newTodoItem = {
            "id": lastId++,
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
        const { todosData , response } = this.state;

        if (!response) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className='todo-block-wrapper'>
                    <TodoList todos={todosData} onDeleted={ this.removeTask }/>
                    <TodoItemForm onAddTodo={this.addTodoItem}/>
                </div>
            );
        }
    }
}

export default TodoBlock;
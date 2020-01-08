import React, {Component} from "react";
// import todoJson from '../../data/todo.json';
import TodoList from "./TodoList";
import './todo.scss';

class TodoBlock extends Component {
    state = {
        todosData: [
            {
                "id": 1,
                "taskName": "Make first",
                "done": false,
                "inProgress": false
            },
            {
                "id": 2,
                "taskName": "Make second",
                "done": false,
                "inProgress": false
            },
            {
                "id": 3,
                "taskName": "Make third",
                "done": false,
                "inProgress": false
            },
            {
                "id": 4,
                "taskName": "Make fourth",
                "done": false,
                "inProgress": false
            },
            {
                "id": 5,
                "taskName": "Make fifth",
                "done": false,
                "inProgress": false
            }
        ]
    };

    removeTask = (id) => {
        this.setState(({todosData}) => {
            const idx = todosData.findIndex((el) => el.id === id);
            const newArr = [
                ...todosData.slice(0, idx),
                ...todosData.slice(idx + 1)
            ];

            return {
                todosData: newArr
            }
        });
    };


    resetTasks = (id) => {
        const resetedTodos = this.state.todosData;

        console.log(resetedTodos)
    };

    render() {
        return (
            <div className='todo-block-wrapper'>
                <TodoList todos={this.state.todosData} onDeleted={ this.removeTask } onReset={this.resetTasks}/>
            </div>
        );
    }
}

export default TodoBlock;
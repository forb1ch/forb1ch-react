import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamation, faTrash, faRetweet} from "@fortawesome/free-solid-svg-icons";

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            done: false,
            inProgress: false
        };

        this.doneTasks = () => {
            this.setState(state => ({
                    done: !this.state.done,
                })
            );
        };

        this.inProgressTasks = () => {
            this.setState(state => ({
                    done: false,
                    inProgress: !this.state.inProgress
                })
            );
        };

        this.resetTasks = () => {
            this.setState(state => ({
                    done: false,
                    inProgress: false
                })
            );
        };

        this.addClass = (doneState, inProgressState) => {
            if (doneState) {
                return 'todo-item done';
            }
            else if (inProgressState) {
                return 'todo-item in-progress';
            }
            else {
                return 'todo-item';
            }
        }
    }

    render() {
        const { id, taskname , onDeleted} = this.props;

        const { done, inProgress} = this.state;

        return (
            <div className={this.addClass(this.state.done, this.state.inProgress)}>
                <div className='todo-item-inner' id={id} onClick={this.doneTasks}>{taskname}{ done && <span> - Done</span>}{ inProgress && <span> - In progress</span>}</div>

                <div className='todo-buttons-wrapper'>
                    <button type='button' className='btn btn-todo btn-trash' onClick={onDeleted}>
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>

                    <button type='button' className='btn btn-todo btn-exclamation' onClick={this.inProgressTasks}>
                        <FontAwesomeIcon icon={faExclamation}/>
                    </button>
                </div>

                <div className='reset-button-wrapper'>
                    <button type='button' className='btn btn-todo btn-reset' onClick={this.resetTasks}>
                        <span>Reset</span>
                        <FontAwesomeIcon icon={faRetweet}/>
                    </button>
                </div>
            </div>
        );
    }
}

export default TodoItem;
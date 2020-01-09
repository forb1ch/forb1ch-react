import React, { Component } from "react";

export default class TodoItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    updateInputValue = (evt) => {
        this.setState({
            inputValue: evt.target.value
        });
    };

    render() {
        return (
            <div
            className='todo-item-form'>
                <div className='todo-textarea'>
                    <textarea name="AddTodo" id="1" cols="30" rows="10" placeholder='Type todo task' value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}></textarea>
                </div>
                <button
                    className='add-item'
                    onClick={() => {
                        this.props.onAddTodo(this.state.inputValue);
                        this.state.inputValue = '';
                    }}
                >
                    Add item
                </button>
            </div>
        )
    }
}
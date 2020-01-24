import React, { Component } from "react";

export default class TodoItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            errorMsg: ''
        };
    }

    addItem = () => {
        if (this.state.inputValue.length > 3) {
            this.props.onAddTodo(this.state.inputValue);

            this.setState({
                inputValue: '',
                errorMsg: ''
            });
        }
        else {
            this.setState({
                errorMsg: 'Put todo task please(Min 4 letters)'
            });
        }
    }

    updateInputValue = (evt) => {
        this.setState({
            inputValue: evt.target.value,
        });

        if (evt.target.value.length > 3 || evt.target.value.length === 0) {
            this.setState({
                errorMsg: '',
            });
        }
        else {
            this.setState({
                errorMsg: 'Put todo task please(Min 4 letters)'
            });
        }
    };

    render() {
        return (
            <div
            className='todo-item-form'>
                <div className='todo-textarea'>
                    <textarea name="AddTodo" id="1" cols="30" rows="2" placeholder='Type todo task' value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}></textarea>
                </div>
                {this.state.errorMsg && <div>{this.state.errorMsg}</div>}

                {this.state.inputValue &&
                <button
                    className='add-item'
                    onClick={this.addItem}
                >
                    Add item
                </button>
                }
            </div>
        )
    }
}
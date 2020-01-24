import React, {Component} from "react";
import TodoBlock from "../../Components/Todo/TodoBlock";

class TodoPage extends Component {
    render() {
        return(
            <div className="App">
                <section>
                    <div className="main-content">
                        <TodoBlock/>
                    </div>
                </section>
            </div>
        );
    }
}

export default TodoPage;
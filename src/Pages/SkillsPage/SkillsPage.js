import React, {Component} from "react";
import Skills from "../../Components/Skills/Skills";
import TodoBlock from "../../Components/Todo/TodoBlock";

class SkillsPage extends Component {
    render() {
        return(
            <div className="App">
                <section>
                    <div className="main-content">
                        <TodoBlock/>
                        <Skills/>
                    </div>
                </section>
            </div>
        );
    }
}

export default SkillsPage;
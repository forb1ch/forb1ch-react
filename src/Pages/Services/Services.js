import React, {Component} from "react";
import ServicesBlock from "../../Components/ServicesBlock/ServicesBlock";

class Services extends Component {
    render () {
        return(
            <div className="App">
                <section>
                    <div className="main-content">
                        <ServicesBlock/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Services;
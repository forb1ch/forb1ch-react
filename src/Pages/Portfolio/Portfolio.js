import React, {Component} from "react";
import PortfolioBlock from "../../Components/PortfolioBlock/PortfolioBlock";

class Portfolio extends Component {
    render () {
        return(
            <div className="App">
                <section>
                    <div className="main-content">
                        <PortfolioBlock/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Portfolio;
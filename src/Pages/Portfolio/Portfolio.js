import React, {Component} from "react";
import Banner from "../../Components/Banner/Banner";
import AboutUs from "../../Components/AboutUs/AboutUs";

class Portfolio extends Component {
    render () {
        return(
            <div className="App">
                <section>
                    <div className="main-content">
                        <h1>Portfolio</h1>
                        <Banner/>
                        <AboutUs/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Portfolio;
import React, {Component} from "react";
import Banner from "../../Components/Banner/Banner";
import AboutUs from "../../Components/AboutUs/AboutUs";

class AboutUsPage extends Component {
    render () {
        return(
            <div className="App">
                <section>
                    <div className="main-content">
                        <h1>AboutUsPage</h1>
                        <Banner/>
                        <AboutUs/>
                    </div>
                </section>
            </div>
        );
    }
}

export default AboutUsPage;
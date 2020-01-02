import React, {Component} from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";
import OurMissionBlock from "../../Components/OurMission/OurMissionBlock";

class AboutUsPage extends Component {
    render () {
        return(
            <div className="App">
                <section>
                    <div className="main-content">
                        <AboutUs/>
                        <OurMissionBlock/>
                    </div>
                </section>
            </div>
        );
    }
}

export default AboutUsPage;
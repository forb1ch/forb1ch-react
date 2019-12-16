import React, {Component} from "react";
import Banner from "../../Components/Banner/Banner";
import AboutUs from "../../Components/AboutUs/AboutUs";
import OurMissionBlock from "../../Components/OurMission/OurMissionBlock";

class AboutUsPage extends Component {
    render () {
        return(
            <div className="App">
                <section>
                    <div className="main-content">
                        <Banner/>
                        <AboutUs/>
                        <OurMissionBlock/>
                    </div>
                </section>
            </div>
        );
    }
}

export default AboutUsPage;
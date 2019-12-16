import React, {Component} from "react";
import Banner from "../../Components/Banner/Banner";
import AboutUs from "../../Components/AboutUs/AboutUs";
import ServicesBlock from "../../Components/ServicesBlock/ServicesBlock";
import OurMissionBlock from "../../Components/OurMission/OurMissionBlock";
import PortfolioBlock from "../../Components/PortfolioBlock/PortfolioBlock";

class Home extends Component {
    render () {
        return(
            <div className="App">
                <section>
                    <div className="main-content">
                        <Banner/>
                        <AboutUs/>
                        <OurMissionBlock/>
                        <ServicesBlock/>
                        <PortfolioBlock/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
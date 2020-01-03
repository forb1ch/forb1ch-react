import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import AboutUsPage from "./Pages/About-us/AboutUsPage";
import Portfolio from "./Pages/Portfolio/Portfolio";
import SkillsPage from "./Pages/SkillsPage/SkillsPage";
import Footer from "./Footer/Footer";
import './App.scss';

function App() {
  return (
      <HashRouter basename='/'>
          <div className="App-wrapper">
              <Header/>
              <Route exact path="/" component={Home}/>
              <Route path="/about-us" component={AboutUsPage}/>
              <Route path="/services" component={Services}/>
              <Route path="/portfolio" component={Portfolio}/>
              <Route path="/skills" component={SkillsPage}/>
              <Footer/>
          </div>
      </HashRouter>
  );
}

export default App;

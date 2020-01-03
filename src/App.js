import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
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
      <BrowserRouter>
          <div className="App-wrapper">
              <Header/>
              <Route exact path="https://forb1ch.github.io/" component={Home}/>
              <Route exact path="https://forb1ch.github.io/about-us" component={AboutUsPage}/>
              <Route exact path="https://forb1ch.github.io/services" component={Services}/>
              <Route exact path="https://forb1ch.github.io/portfolio" component={Portfolio}/>
              <Route exact path="https://forb1ch.github.io/skills" component={SkillsPage}/>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;

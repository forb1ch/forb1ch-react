import React from 'react';
import Header from "./Header/Header";
import Banner from "./Components/Banner/Banner";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Footer/Footer";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>

      <section>
        <div className="main-content">
          <Banner/>
          <AboutUs/>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default App;

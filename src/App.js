import React from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import SlideShow from "./components/slideshow.js";
import Head from "./components/head.js";
import Recommends from "./components/recommends.js";
import Steps from "./components/steps.js";
import MobileApp from "./components/mobileApp.js";
import Promotion from "./components/promotion.js";

function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>

      <div className="head-plus-slide">
        <div className="head">
          <Head />
        </div>
        <div className="slide-show">
          <SlideShow />
        </div>
      </div>

      <div className="recommends">
        <Recommends />
      </div>

      <div>
        <Steps />
      </div>

      <div>
        <MobileApp />
      </div>

      <div>
        <Promotion />
      </div>
    </div>
  );
}

export default App;

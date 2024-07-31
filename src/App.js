import React from "react";
import Header from "./components/common/header/Header";
import "./App.css";
import Homepages from "./components/home/Homepages";
import Footer from "./components/common/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import IndiaPage from "./components/CategoryPage/India/IndiaPage";
import InternationalPage from "./components/CategoryPage/International/InternationalPage";
import SportsPage from "./components/CategoryPage/Sports/SportsPage";
import SocialMediaPage from "./components/CategoryPage/SocialMedia/SocialMediaPage";
import SciencePage from "./components/CategoryPage/Science/SciencePage";
import TechnologyPage from "./components/CategoryPage/Technology/TechnologyPage";
import BusinessPage from "./components/CategoryPage/Business/BusinessPage";
import ElectricCarsPage from "./components/CategoryPage/ElectricCars/ElectricCarsPage";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepages} />
          <Route path="/india" component={IndiaPage} />
          <Route path="/international" component={InternationalPage} />
          <Route path="/sports" component={SportsPage} />
          <Route path="/social-media" component={SocialMediaPage} />
          <Route path="/science" component={SciencePage} />
          <Route path="/technology" component={TechnologyPage} />
          <Route path="/business" component={BusinessPage} />
          <Route path="/electric-cars" component={ElectricCarsPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;

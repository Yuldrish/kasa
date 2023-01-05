import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Lodging from "./pages/Lodging";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/aboutus">
        <AboutUs />
      </Route>
      <Route path="/lodging">
        <Lodging />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Lodging from "./pages/Lodging";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import reportWebVitals from "./reportWebVitals";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

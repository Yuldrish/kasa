import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Lodging from "./pages/Lodging";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import "./style/sass/main.sass"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/À-propos-de-nous" element={<AboutUs />} />
      <Route path="/logements" element={<Lodging />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

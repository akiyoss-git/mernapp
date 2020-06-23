import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Modules/Header/Header"
import Footer from "./Modules/Footer/Footer"
import PricelistModule from "./Modules/Pricelist/PricelistModule"
import "./App.css"

function App() {
  return (
    <div className="full">
    <Router>
      <Header />
    <div className="container">
      <Route path="/" exact component={PricelistModule} />
    </div>
    <Footer />
  </Router>
  </div>
  );
}

export default App;

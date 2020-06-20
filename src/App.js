import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import PricelistModule from "./Modules/Pricelist/PricelistModule"

function App() {
  return (
    <Router>
    <div className="container">
      <Route path="/" exact component={PricelistModule} />
    </div>
  </Router>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Modules/Header/Header"
import Footer from "./Modules/Footer/Footer"
import PricelistModule from "./Modules/Pricelist/PricelistModule"
import MainModule from "./Modules/Main/MainModule"
import ControlModule from "./Modules/Control/ControlModule"
import PersonalModule from "./Modules/Personal/PersonalModule"
import SettingsModule from "./Modules/Settings/SettingsModule"
import PaymentsModule from "./Modules/Payments/PaymentsModule"
import ReviewsModule from "./Modules/Reviews/ReviewsModule"
import ClientsModule from "./Modules/Clients/ClientsModule"
import "./App.css"

function App() {
  return (
    <div className="full">
    <Router>
      <Header />
    <div className="container">
      <Route path="/" exact component={MainModule} />
      <Route path="/control" exact component={ControlModule} />
      <Route path="/pricelist" exact component={PricelistModule} />
      <Route path="/personal" exact component={PersonalModule} />
      <Route path="/settings" exact component={SettingsModule} />
      <Route path="/payments" exact component={PaymentsModule} />
      <Route path="/reviews" exact component={ReviewsModule} />
      <Route path="/clients" exact component={ClientsModule} />
    </div>
    <Footer />
  </Router>
  </div>
  );
}

export default App;

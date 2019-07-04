import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./container/header";
import HomePage from "./container/homePage";
import DetailPage from "./container/detailPage";
import Footer from "./container/footer";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/detail" component={DetailPage} />
          <Redirect to="/home" component={HomePage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";

import store from "./redux/store";
import Header from "./common/Header";
import Home from "./common/Home";
import Detail from "./common/Detail";
import Login from "./common/Login";
import Write from "./common/write";
import Register from "./common/Register";
import Download from "./common/Download";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/write" exact component={Write} />
          <Route path="/download" exact component={Download} />
          <Route path="/register" exact component={Register} />
          <Route path="/detail/:id" exact component={Detail} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

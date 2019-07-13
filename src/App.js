import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";

import store from "./redux/store";
import Header from "./common/header/Header";
import Home from "./common/home/Home";
import Detail from "./common/detail/Detail";
import Login from "./common/login/Login";
import Write from "./common/write/write";
import Register from "./common/register/Register";
import Download from "./common/download/Download";

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

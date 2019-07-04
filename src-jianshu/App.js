import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import Header from "./common/header/index";
import Contend from "./common/content/index";
import Footer from "./common/footer/index";

import { GlobalStyle } from "./style";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <Link to="/contend">{Contend}</Link>
        <Link to="/lll">{Footer}</Link>

        <Switch>
          <Route Path="./contend" component={Contend} />
          <Route Path="./lll" component={Footer} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;

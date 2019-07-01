import React from "react";
import Header from "./common/header/index";
import Contend from "./common/content/index";
import { GlobalStyle } from "./style";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <Contend />
      </Provider>
    </div>
  );
}

export default App;

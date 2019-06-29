import React from "react";
import Header from "./common/header/index";
import { GlobalStyle } from "./style";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
      </Provider>
    </div>
  );
}

export default App;

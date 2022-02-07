import React from "react";
import { Provider } from "react-redux";
import Routers from "./pages/routers";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
};

export default App;

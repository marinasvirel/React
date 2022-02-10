import React from "react";
import { Provider } from "react-redux";
import Routers from "./pages/routers";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { CircularProgress } from "@mui/material";

const App = () => {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor} loading={<CircularProgress />}>
      <Routers />
    </PersistGate>
  </Provider>
  );
};

export default App;

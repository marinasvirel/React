import React from "react";
import { Provider } from "react-redux";
import Routers from "./pages/routers";
import { store } from "./store";
import { AuthProvider } from "./hook/useAuth";

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Routers />
      </AuthProvider>
    </Provider>
  );
};

export default App;

import React from "react";
import { Provider } from "react-redux";
import Routers from "./pages/routers";
import { store } from "./store/index";

export const MyThemeContext = React.createContext({ theme: "dark" });
export const MyLocalizationContext = React.createContext("en");
export const DataContext = React.createContext({ name: "Baiden" });

const App = () => {
  return (
    <Provider store={store}>
      <MyThemeContext.Provider value={{ theme: "dark" }}>
        <MyLocalizationContext.Provider value={"en"}>
          <DataContext.Provider value={{ name: "John" }}>
            <Routers />
          </DataContext.Provider>
        </MyLocalizationContext.Provider>
      </MyThemeContext.Provider>
    </Provider>
  );
};

export default App;

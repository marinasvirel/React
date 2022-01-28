import { useContext } from "react";
import { MyThemeContext, MyLocalizationContext, DataContext } from "../App";

const Home = () => {
  const contexValue = useContext(MyThemeContext);
  const local = useContext(MyLocalizationContext);
  const data = useContext(DataContext);
  return(
    <div>
      <div>Home my theme: {contexValue.theme}</div>
      <div>Home my theme: {local}</div>
      <div>Home my theme: {data.name}</div>
    </div>
  )
};

 export default Home;
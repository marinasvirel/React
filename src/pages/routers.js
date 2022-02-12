import { List, ListItem } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./home";
import Chats from "./chats";
import Profile from "./profile";
import NoChats from "./noChats";
import Gists from "./gists";
import Login from "./login";
import SignUp from "./signup";
import RequiredAuth from "../hocs/requiredAuth";

const Routers = () => {
  return (
    <div className="routers">
      <List className="routers-list">
        <ListItem className="routers-list-item">
          <Link to="/home" className="router-link">
            <h2>Home</h2>
          </Link>
        </ListItem>
        <ListItem className="routers-list-item">
          <Link to="/chats" className="router-link">
            <h2>Chats</h2>
          </Link>
        </ListItem>
        <ListItem className="routers-list-item">
          <Link to="/profile" className="router-link">
            <h2>Profile</h2>
          </Link>
        </ListItem>
        <ListItem className="routers-list-item">
          <Link to="/gists" className="router-link">
            <h2>Gists</h2>
          </Link>
        </ListItem>
        <ListItem className="routers-list-item">
          <Link to="/signup" className="router-link">
            <h2>Регистрация</h2>
          </Link>
        </ListItem>
        <ListItem className="routers-list-item">
          <Link to="/login" className="router-link">
            <h2>Войти</h2>
          </Link>
        </ListItem>
        <ListItem className="routers-list-item">
          <Link to="/signout" className="router-link">
            <h2>Выйти</h2>
          </Link>
        </ListItem>
      </List>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<RequiredAuth />}>
          <Route path="/chats" element={<NoChats/>} />
          <Route path="/chats/:chatId" element={<Chats/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/gists" element={<Gists />} />
        </Route>
        <Route path="*" element={<NoChats />} />
      </Routes>
    </div>
  );
};
export default Routers;

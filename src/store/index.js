import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import chatsReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";
import profileReducer from "./profile/profileReducer";
import middleware from "./middleware";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allRedusers = combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
  messages: messagesReducer,
});

export const store = createStore(
  allRedusers,
  composeEnhancers(applyMiddleware(middleware))
);

import { combineReducers, createStore } from "redux";

import chatsReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";
import profileReducer from "./profile/profileReducer";



const allRedusers = combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
  messages: messagesReducer,
});

export const store = createStore(allRedusers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

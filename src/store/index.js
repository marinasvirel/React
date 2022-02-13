import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import chatsReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";
import profileReducer from "./profile/profileReducer";
import middleware from "./middleware";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
};

const allRedusers = combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
  messages: messagesReducer,
});

const persistedReducer = persistReducer(persistConfig, allRedusers);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(middleware))
);

export const persistor = persistStore(store);

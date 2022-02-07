import { ADD_MESSAGE, addMessage } from "./messages/action";

const middleware = (store) => (next) => (action) => {
  if (action.type === ADD_MESSAGE && action.message.author !== "bot") {
    const botMessage = { text: "hello middleware", author: "bot" };
    setTimeout(
      () => store.dispatch(addMessage(action.chatId, botMessage)),
      1000
    );
  }

  return next(action);
};

export default middleware;

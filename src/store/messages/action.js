export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
});

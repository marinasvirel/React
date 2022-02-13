import { ADD_CHAT, DELETE_CHAT } from "./action";

const initialState = {
  chatList: [],
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            id: Date.now(),
            name: action.name,
          },
        ],
      };
    case DELETE_CHAT:
      return {
        ...state,
        chatList: [
          ...state.chatList.slice(0, action.index),
          ...state.chatList.slice(action.index + 1),
        ],
      };
    default:
      return state;
  }
};

export default chatsReducer;

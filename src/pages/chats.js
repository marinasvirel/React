import { useState } from "react";
import { useParams } from "react-router-dom";
import Chatlist from "../components/chatList";
import MessageList from "../components/messageList";
import NoChats from "./noChats";

const initialChats = {
  id1: {
    name: "Chat 1",
    messages: [
      {
        text: "Message 1 from chat 1",
        author: "bot",
      },
    ],
  },
  id2: {
    name: "Chat 2",
    messages: [
      {
        text: "Message 1 from chat 2",
        author: "bot",
      },
      {
        text: "Message 2 from chat 2",
        author: "bot",
      },
    ],
  },
};

const Chats = () => {
  const [chatList, setChatList] = useState(initialChats);
  let { chatId } = useParams();
  return chatList[chatId] ? (
    <div className={"chat"}>
      <Chatlist chats={chatList} chatId={chatId} />
      <MessageList messagelist={chatList[chatId].messages} />
    </div>
  ) : (
    <NoChats />
  );
};

export default Chats;

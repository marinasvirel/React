import Chatlist from "../components/chatList";
import ControlPanel from "../components/controlPanel";
import MessageList from "../components/messageList";

const Chats = () => {
  return (
    <div className={"chat"}>
      <Chatlist />
      <MessageList />
      <ControlPanel/>
    </div>
  );
};

export default Chats;

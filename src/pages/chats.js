import Chatlist from "../components/chatList";
import ControlPanel from "../components/controlPanel";
import MessageList from "../components/messageList";

const Chats = () => {
  return (
    <div className={"chat"}>
      <Chatlist />
      <div className="message-field">
        <MessageList />
        <ControlPanel />
      </div>
    </div>
  );
};

export default Chats;

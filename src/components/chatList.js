import { Delete } from "@mui/icons-material";
import { Button, Dialog, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addChat } from "../store/chats/action";
import { deleteChat } from "../store/chats/action";

const ChatList = () => {
  const chats = useSelector((state) => state.chats.chatList);
  const { chatId } = useParams();
  const [visible, setVisible] = useState(false);
  const [newChatName, setNewChatName] = useState("");
  const dispatch = useDispatch();

  const handleOpen = () => {
    setVisible(true)
  };

  const handleClose = () => {
    setVisible(false)
  };

  const onAddChat = () => {
    dispatch(addChat(newChatName));
    setNewChatName("");
    handleClose();
  };

  const hadleDelete = (index) => {
    dispatch(deleteChat(index));
  };

  const handleChange = (e) => setNewChatName(e.target.value);

  return (
    <div className="chatList">
      {chats.map((chat, index) => (
        <div key={index}>
          <Link to={`/chats/${chat.id}`}>
            <b style={{ color: chat.id === chatId ? "black" : "grey" }}>
              {chat.name}
            </b>
            <button onClick={() => hadleDelete(index)}>
              <Delete/>
            </button>
          </Link>
        </div>
      ))}
      <Button onClick={handleOpen}>add</Button>
      <Dialog open={visible} onClose={handleClose}>
        <DialogTitle>Chat name</DialogTitle>
        <TextField value={newChatName} onChange={handleChange}></TextField>
        <Button onClick={onAddChat} disabled={!newChatName}>Add chat</Button>
      </Dialog>
    </div>
  );
};

export default ChatList;

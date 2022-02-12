import { Delete } from "@mui/icons-material";
import { Button, Dialog, DialogTitle, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addChat } from "../store/chats/action";
import { deleteChat } from "../store/chats/action";
import {getDatabase, ref, push, set, get, child} from "firebase/database";
import firebase from "../service/firebase";

const ChatList = () => {
  const [chats, setChats] = useState([]);
  // const chats = useSelector((state) => state.chats.chatList);
  const { chatId } = useParams();
  const [visible, setVisible] = useState(false);
  const [newChatName, setNewChatName] = useState("");
  // const dispatch = useDispatch();

  const handleOpen = () => {
    setVisible(true)
  };

  const handleClose = () => {
    setVisible(false)
  };

  const onAddChat = () => {
    // dispatch(addChat(newChatName));
    const db = getDatabase(firebase);
    const chatRef = ref(db, "/chats");
    const newChatRef = push(chatRef);
    set(newChatRef, {name: newChatName})
    setNewChatName("");
    handleClose();
  };

  const hadleDelete = (index) => {
    // dispatch(deleteChat(index));
  };

  const handleChange = (e) => setNewChatName(e.target.value);

  useEffect(() => {
    const db = getDatabase(firebase);
    const dbRef = ref(db);
    get(child(dbRef, "/chats")).then((snapshot) => {
      if(snapshot.exists()) {
        const obj = snapshot.val();
        const chatIds = Object.keys(obj);
        const chaArr = chatIds.map(item => ({id: item, name: obj[item].name}));
        setChats(chaArr);
      }
    })
  }, [])

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

import { Face, Adb } from "@mui/icons-material";
import { List, ListItem, ListItemText } from "@mui/material";
import { getDatabase, get, ref, child } from "firebase/database";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import firebase from "../service/firebase";

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const profileName = useSelector((state) => state.profile.name);
  let { chatId } = useParams();

  useEffect(() => {
    const db = getDatabase(firebase);
    const dbRef = ref(db);
    get(child(dbRef, `/messages/${chatId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const msg = Object.values(snapshot.val());
        setMessages(msg);
      }
    });
  }, [chatId]);

  const renderMessage = useCallback((message, index) => {
    return (
      <ListItem className="message-list-item" key={index}>
        {message.author !== profileName ? <Adb /> : <Face />}
        <ListItemText primary={message.text} secondary={message.author} />
      </ListItem>
    );
  }, []);

  return (
    <List className="message-list">
      {messages.map((message, index) => renderMessage(message, index))}
    </List>
  );
};

export default MessageList;

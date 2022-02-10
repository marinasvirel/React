import { Face, Adb } from "@mui/icons-material";
import { List, ListItem, ListItemText } from "@mui/material";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MessageList = () => {
  const profileName = useSelector(state => state.profile.name);
  const messages = useSelector(state => state.messages.messageList);
  let {chatId} = useParams();
  const getMessagesById = messages[chatId];

  const renderMessage = useCallback((message, index) => {
    
    return(
      <ListItem className="message-list-item" key={index}>
          {message.author !== profileName ? <Adb/> : <Face/>}
          <ListItemText primary={message.text} secondary={message.author} />
        </ListItem>
    )
  }, []);

  return (
    <List className="message-list">
      {getMessagesById?.map((message, index) => renderMessage(message, index))}
    </List>
  );
};

export default MessageList;

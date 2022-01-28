import { List, ListItem, ListItemText } from "@mui/material";

const MessageList = ({ messagelist }) => {
  return (
    <List className="message-list">
      {messagelist.map((message, index) => (
        <ListItem className="message-list-item" key={index}>
          <ListItemText primary={message.text} secondary={message.author} />
        </ListItem>
      ))}
    </List>
  );
};

export default MessageList;

import React, { useEffect, useState } from "react";
import "./App.css";
import { TextField, Fab, List, ListItem } from "@material-ui/core";

function App() {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");

  const author = {
    user: "user",
    bot: "bot",
  };

  const handleChange = (event) => {
    const valueFromInput = event.target.value;
    setValue(valueFromInput);
  };

  const handleSend = () => {
    setMessageList([...messageList, { text: value, author: author.user }]);
    setValue("");
  };

  useEffect(() => {
    if (
      messageList.length > 0 &&
      messageList[messageList.length - 1].author === author.user
    ) {
      setTimeout(() => {
        setMessageList([
          ...messageList,
          {
            text: "Автоматическое сообщение",
            author: author.bot,
          },
        ]);
      }, 1500);
    }
  }, [messageList]);

  return (
    <div className="App">
      <List>
        <ListItem></ListItem>
      </List>
      <div className="messenger">
        <ul className="dashboard">
          {messageList.map((message, index) => (
            <li key={index} className="message">
              <h6>{message.author}</h6>
              <p className="messenger-text">{message.text}</p>
            </li>
          ))}
        </ul>
        <div className="control-panel">
          <TextField
            style={{ margin: "0", width: "360px" }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={value}
            onChange={handleChange}
            autoFocus
          />
          <Fab onClick={handleSend} color="primary" aria-label="edit">
            Edit!
          </Fab>
        </div>
      </div>
    </div>
  );
}

export default App;

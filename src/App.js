import React, { useEffect, useState } from "react";
import "./App.css";

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
   if(messageList.length > 0 && messageList[messageList.length - 1].author === author.user){
     setTimeout(() => {
      setMessageList([...messageList, {
        text: "Автоматическое сообщение",
        author: author.bot
      }]);
     }, 1500)
   }
 }, [messageList])

  return (
    <div className="App">
      <div className="messenger">
      <div className="dashboard">
        {messageList.map((message, index) => (
          <div key={index} className="message">
            <h6>{message.author}</h6>
            <p className="messenger-text">{message.text}</p>
          </div>
        ))}
      </div>
      <div className="control-panel">
        <input onChange={handleChange} value={value} />
        <button onClick={handleSend}>Отправить</button>
      </div>
      </div>
    </div>
  );
}

export default App;

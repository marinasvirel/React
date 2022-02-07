import { Fab, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addMessage } from "../store/messages/action";

const ControlPanel = () => {
  const [value, setValue] = useState("");
  const messages = useSelector((state) => state.messages.messageList);
  const profileName = useSelector(state => state.profile.name);
  const dispatch = useDispatch();
  const { chatId } = useParams();

  const handleChange = (event) => {
    const valueFromInput = event.target.value;
    setValue(valueFromInput);
  };

  const sendMessage = (message, author) => {
    dispatch(
      addMessage(chatId, {
        text: message,
        author: author,
      })
    );
    setValue("");
  };

  const handleButton = () => {
    sendMessage(value, profileName);
  };

  useEffect(() => {
    const currentChat = messages[chatId];
    if (
      currentChat?.length > 0 &&
      currentChat[currentChat?.length - 1].author === profileName
    ) {
      setTimeout(() => {
        const currentMessage = "auto message";
        sendMessage(currentMessage, "bot");
      }, 1500);
    }
  }, [messages[chatId]]);

  return (
    <div className="control-panel">
      <TextField value={value} onChange={handleChange} />
      <Fab onClick={handleButton}>edit</Fab>
    </div>
  );
};

export default ControlPanel;

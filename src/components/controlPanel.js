import { Fab, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addMessage } from "../store/messages/action";

const ControlPanel = () => {
  const [value, setValue] = useState("");
  const profileName = useSelector((state) => state.profile.name);
  const dispatch = useDispatch();
  const { chatId } = useParams();

  const handleChange = (event) => {
    const valueFromInput = event.target.value;
    setValue(valueFromInput);
  };

  const handleButton = () => {
    dispatch(
      addMessage(chatId, {
        text: value,
        author: profileName,
      })
    );
    setValue("");
  };

  return (
    <div className="control-panel">
      <TextField value={value} onChange={handleChange} />
      <Fab onClick={handleButton}>edit</Fab>
    </div>
  );
};

export default ControlPanel;

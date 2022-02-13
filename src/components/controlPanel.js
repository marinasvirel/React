import { Fab, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDatabase, ref, push, set } from "firebase/database";
import firebase from "../service/firebase";

const ControlPanel = () => {
  const [value, setValue] = useState("");
  const profileName = useSelector((state) => state.profile.name);
  const { chatId } = useParams();

  const handleChange = useCallback(
    (event) => {
      const valueFromInput = event.target.value;
      setValue(valueFromInput);
    },
    [value]
  );

  const handleButton = useCallback(() => {
    const message = {
      text: value,
      author: profileName,
    };

    const db = getDatabase(firebase);
    const messageRef = ref(db, `/messages/${chatId}`);
    const newMessageRef = push(messageRef);
    set(newMessageRef, message);

    setValue("");
  }, [value, chatId]);

  return (
    <div className="control-panel">
      <TextField value={value} onChange={handleChange} />
      <Fab onClick={handleButton}>edit</Fab>
    </div>
  );
};

export default ControlPanel;

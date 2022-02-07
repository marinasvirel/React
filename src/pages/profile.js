import { Button, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_NAME } from "../store/profile/chatActions";

const Profile = () => {
  const { name, showName } = useSelector((state) => state.profile);
  const [value, setValue] = useState(name);
  const dispatch = useDispatch();

  const handleChance = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const setName = useCallback(() => {
    dispatch({ type: CHANGE_NAME, payload: value });
  }, [dispatch, value]);

  return (
    <div>
      <TextField type="text" value={value} onChange={handleChance}></TextField>
      <Button onClick={setName}>Change Name</Button>
    </div>
  );
};

export default Profile;

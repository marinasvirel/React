import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import firebase from "../service/firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const hadleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth(firebase);
    await createUserWithEmailAndPassword(auth, email, password)
  };

  return (
    <form onSubmit={hadleSubmit}>
      <TextField
      type="email" 
      placeholder="e-mail" 
      name="email" 
      value={email}
      onChange={handleEmailChange} />
      <br/>
      <br/>
      <TextField
      type="password" 
      placeholder="password" 
      name="password" 
      value={password}
      onChange={handlePasswordChange} />
      <br/>
      <br/>
      <Button type="submit" variant="contained">Регистрация</Button>
    </form>
  );
};

export default SignUp;

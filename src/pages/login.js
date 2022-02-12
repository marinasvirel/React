import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation;

  let from = location.state?.from?.pathname || "/";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const hadleSubmit = async (e) => {
    e.preventDefault();
    await auth.signin({email, password}, () => {
      navigate(from, {replace: true})
    })
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
      <Button type="submit" variant="contained">Войти</Button>
    </form>
  );
};

export default Login;

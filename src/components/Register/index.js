import styles from "./Register.module.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography
} from "@mui/material";
import {Link} from "react-router-dom";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";

function SignUp() {
  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
  });

  const navigate = useNavigate();

  const handleUserInfoChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const signup = () => {
    if (user.username && user.password) {
      fetch("/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(res => {
          toast.success("Sign up successful!");
          navigate("/login");
        })
    }
  }

  return <div className={styles.container}>
    <Card sx={{ minWidth: 350 }}>
      <CardContent>
        <Typography fontSize={30} fontWeight="bold" align="center">Register</Typography>
        <Box mt={2}>
          <TextField label="Username" variant="outlined" sx={{width: "100%"}} value={user.username} name="username" onChange={(value) => handleUserInfoChange(value, false)} />
        </Box>
        <Box mt={2}>
          <TextField label="Password" variant="outlined" type="password" sx={{width: "100%"}} value={user.password} name="password" onChange={(value) => handleUserInfoChange(value, false)} />
        </Box>
        <Box mt={2}>
          <TextField label="Email" variant="outlined" sx={{width: "100%"}} value={user.email} name="email" onChange={(value) => handleUserInfoChange(value, false)} />
        </Box>
        <Box mt={2}>
          <Button variant="contained" sx={{width: "100%"}} onClick={signup}>Register</Button>
        </Box>
        <Box mt={2}>
          Have an account? <Link to="/login">Log in</Link>
        </Box>
      </CardContent>
    </Card>
  </div>
}

export default SignUp;

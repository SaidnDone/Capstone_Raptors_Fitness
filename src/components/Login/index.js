import styles from "./Login.module.css";
import {Box, Button, Card, CardContent, TextField, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useState} from "react";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const login = () => {
    if (username && password) {
      fetch("/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      })
        .then(res => res.json())
        .then(res => {
          if (res) {
            localStorage.setItem("user", JSON.stringify(res));
            toast.success("Login successful!");
            navigate("/home");
          } else {
            toast.error("Invalid username or password!");
          }
        })
    }
  }

  return <div className={styles.container}>
    <Card sx={{ minWidth: 350 }}>
      <CardContent>
        <Typography fontSize={30} fontWeight="bold" align="center">Login</Typography>
        <Box mt={2}>
          <TextField label="Username" variant="outlined" sx={{width: "100%"}} value={username} onChange={e => setUsername(e.target.value)} />
        </Box>
        <Box mt={2}>
          <TextField label="Password" variant="outlined" type="password" sx={{width: "100%"}}  value={password} onChange={e => setPassword(e.target.value)} />
        </Box>
        <Box mt={2}>
          <Button variant="contained" sx={{width: "100%"}} onClick={login}>Login</Button>
        </Box>
        <Box mt={2}>
          Don't have an account? <Link to="/register">Register</Link>
        </Box>
      </CardContent>
    </Card>
  </div>
}

export default Login;

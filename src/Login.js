import { Alert, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

function Login({userdata}) {

    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [currentUser, setCurrentUser] = useState(null);
    const [error, setError] = useState('');

    const handleEmailInput = (event) => {
        setInputEmail(event.target.value)
    }

    const handlePasswordInput = (event) => {
        setInputPassword(event.target.value)
    }
    
    const handleLogout = () => {
        setCurrentUser(null);
        setInputEmail('');
        setInputPassword('');
    }

    const checkLogin = () => {
        const user = userdata.find( user => {
            return user.email == inputEmail && user.password === inputPassword ? true : false;
       });
       if(user){
            setCurrentUser(user);
            setError('');
       }
        else
            setError('Enter valid email or password');
    }


    return (
        <Box id="main" my={45} width={500} marginX="auto">
            {
                currentUser ?
                <>
                    <h2>Hi! {currentUser.userName}</h2>
                    <Button onClick={handleLogout} variant="contained" >Logout</Button>
                </>
                :
                <>
                    <TextField onChange={handleEmailInput} sx={{marginBottom: "10px"}} fullWidth id="outlined-basic" label="Email" variant="outlined" />
                    <TextField onChange={handlePasswordInput} sx={{marginBottom: "10px"}} fullWidth type="password" id="outlined-basic" label="Password" variant="outlined" />
                    <span style={{"color": "red"}}>{error}</span><br />
                    <Button onClick={checkLogin} disabled={ inputPassword.length == 0 || inputEmail.length == 0 } variant="contained" >Login</Button>
                </>    
        }
        </Box>
    )
}

export default Login;
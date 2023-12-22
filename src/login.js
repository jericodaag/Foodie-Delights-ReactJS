import React, {useState} from 'react';
import './login.css';

const Login =({onLogin})=> {
    const [username, setUsername] = useState ('');
    const [password, setPassword] = useState ('');

    const handleLogin =() => {
        if (username && password){
            onLogin(username);    
        } else {
            alert('Please enter both username and password');
        }
    }

    return(
        <div class = "body">
            <form align = "center" class ="loginform">
            <h1>Login Page</h1>
                <br />
                    <input class="inputs"type="text"
                    value ={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    placeholder="Username"/>
                <br/>
                <br/>
                    <input class="inputs" type="password"
                    value ={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    placeholder="Password"/>
                <br />
                <br/>
                <center><button class = "button" type="button" onClick={handleLogin}><span>Log In</span></button></center>
            </form>
        </div>
    )
}
export default Login;
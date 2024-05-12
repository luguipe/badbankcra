import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import axios from "axios";
import {
    Card,
    Accordion,
    Button,
    Container,
    Row,
    Col,
    Image,
    list,
    ListGroupItem,
    Input
  } from "react-bootstrap";
  
import { UserContext } from "../context";



export function Login() {
    const ctx = React.useContext(UserContext);
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');

    function checkEmptyField(field, label) {
        if (!field) {
            setStatus("Error: " + label);
            setTimeout(() => setStatus(''), 2000);
            return false;
        }
        return true;
    }

    function handleLogin() {
        if (!checkEmptyField(email, 'email')) return;
        if (!checkEmptyField(password, 'password')) return;
        const user = ctx.users.find((user) => user.email === email);
        if (!user) {
            setStatus("Invalid user, please check the spelling of your email or create an account with us.")
            setTimeout(() => setStatus(''), 3000)
            return;
        }
        if (user.password == password) {
            setShow(false);
            ctx.loggedIn.push({user});
            return;
        } else {
            setStatus("Invalid Password");
            setTimeout(() => setStatus(''), 2000);
        }
    }

    function clearForm(){
        setName('')
        setEmail('')
        setPassword('')
        setShow(true);
    }

    return (
        <Card
            bgcolor="dark"
            txtcolor="white"
            header="Log In"
            status={status}
            body={show ? (
                <>
                    Email address<br />
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /> <br />
                    Password <br />
                    <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/> <br />
                    <button type="submit" className="btn btn-secondary" onClick={handleLogin}>Log in</button>
                </>
            ) : ( 
                <>
                    <h5>Success, please confirm login:</h5>
                    <button type="submit" className="btn btn-secondary" onClick={clearForm}>Confirm</button>
                </>
            )
            }
        />
    );
}
export default Login;
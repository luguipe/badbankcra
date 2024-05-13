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

    const handleLogin = () => {
        if (!checkEmptyField(email, 'email'))
            // console.log('email is empty');
            return;
        if (!checkEmptyField(password, 'password')) 
            // console.log('Needs password');
            return;
            console.log("email: ", email, "Password: ", password);
            
        const user = ctx.users.find((user) => user.email === email);
        //it reaches here but is not validating the user
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
    };

    const clearForm = () =>{
        setName('')
        setEmail('')
        setPassword('')
        setShow(true);
    }

    return (
        <Card bg="primary" text="white">
            <Card.Header>Log In</Card.Header>
      
            <Card.Body> {show ? (
                <>
                    <Card.Title>Email address</Card.Title>
                    <input 
                        type="input" 
                        className="form-control" 
                        id="email" 
                        placeholder="Enter email" 
                        value={email} 
                        onChange={e => setEmail(e.currentTarget.value)} 
                    /> 
                    <br />
                    <Card.Title>Password</Card.Title> 
                        <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Enter password" 
                        value={password} 
                        onChange={e => setPassword(e.currentTarget.value)}
                    /> 
                        <br />
                    <button 
                        type="submit" 
                        className="btn btn-secondary" 
                        onClick={handleLogin}
                    >
                        Log in
                    </button>
                </>
            ) : ( 
                <>
                    <Card.Title>Success, please confirm login:</Card.Title>
                    <button 
                        type="submit" 
                        className="btn btn-secondary" 
                        onClick={clearForm}
                    >
                        Confirm
                    </button>
                </>
            )
            }
            </Card.Body>
        </Card>
    );
}
export default Login;
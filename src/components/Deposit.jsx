import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import axios from "axios";
import { Card, Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText
  } from "react-bootstrap";
  import { ReactDOM } from "react";
  import { UserContext } from "../context";

export function Deposit(){
    const ctx = React.useContext(UserContext);
    let currentUser = ctx.loggedIn[0];
    const [update, setUpdate] = React.useState('false');
    const [value, setValue]   = React.useState('');
    const [show, setShow]     = React.useState(true);

    const handleTextChange = (e) => {
        setValue(e.target.value);
    }

    function handleDeposit() {
        let balance = document.getElementById("balance").value;
        if(value > 0 && !isNaN(value)) {
            currentUser.user.balance += Number(value);
            setUpdate('true');
            setShow('false');
        } else {
            alert('Transaction failed, please ensure you are using only numbers and your deposit is above $0.')
        }
    }

    return (
        <Card text="white" bg="dark">
        <Card.Header>Deposit</Card.Header>
            <Card.Body>
                {show ? (
                    currentUser ? (
                        <>
                            <Card.Title>
                                {update
                                    ? <Card.Text>"Balance: " + ${currentUser.user.balance}</Card.Text>
                                    : <Card.Text>"Balance: " +${currentUser.user.balance}</Card.Text>
                                }   
                            </Card.Title>
                            <Card.Title>Deposit Amount</Card.Title>
                            <input
                                type="number"
                                width="200"
                                id="balance"
                                onChange={handleTextChange}
                                value={value}
                            ></input>
                            <button 
                                type="submit"
                                disabled={value ? false : true}
                                className="btn btn-light"
                                onClick={handleDeposit}
                            >
                                Deposit
                            </button>
                        </>
                    ) : (
                        <Card.Text>"Please log in or create an account with us."</Card.Text>
                    )
                ) : (
                    <Card.Text>"Success! Balance: $"${currentUser.user.balance}</Card.Text>
                )
            }
            </Card.Body>
        </Card>
    );
}
export default Deposit;
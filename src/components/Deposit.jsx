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
        <Card
        txtcolor="white"
        bgcolor="dark"
        header="Deposit"
        body={
            show ? (
                currentUser ? (
                    <>
                        <h5>
                            {update
                            ? "Balance: " + currentUser.user.balance
                            : "Balance: " +currentUser.user.balance}
                        </h5>
                        <h6>Deposit Amount</h6>
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
                    "Please log in or create an account with us."
                )
            ) : (
                "Success! Balance: $" + currentUser.user.balance
            )
        }
        />
    );
}
export default Deposit;
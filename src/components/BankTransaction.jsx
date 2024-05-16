import React, {useContext} from "react";
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

export function BankTransaction({transactionType}){
  
    const isDeposit = transactionType.toLowerCase() === "deposit";

    const ctx = useContext(UserContext);
    let currentUser = ctx.loggedInUser;
   
    const [value, setValue]   = React.useState('');
    const [show, setShow]     = React.useState(false);

    const handleTextChange = (e) => {
        setValue(e.target.value);
    }
    function handleTransaction() {
        setShow(false);

        if(value <= 0 || isNaN(value))  {
            alert(`Transaction failed, please ensure you are using only numbers and your ${transactionType} is above $0.`)
            return;
        }   
        const modifier = isDeposit ? 1 : -1;
        const {okay, message} = ctx.changeBalance(Number(value*modifier));
        if (!okay){
            alert(`${transactionType} failed : ${message}`)
            return;
           
        } 
        setShow(true);
    }

    return (
        <Card text={isDeposit  ? "white" : "black"  } 
                bg={isDeposit  ? "success" : "warning" }>
        <Card.Header>{transactionType}</Card.Header>
            <Card.Body>
                {/* {JSON.stringify(currentUser)} */}
                {
                    currentUser ? (
                        <>
                            <Card.Title>
                                <Card.Text>`Balance:  + ${currentUser.balance}</Card.Text>
                            </Card.Title>
                            <Card.Title>{transactionType} Amount</Card.Title>
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
                                onClick={handleTransaction}
                            >
                                {transactionType}
                            </button>
                        </>
                    ) : (
                        <Card.Text>"Please log in or create an account with us."</Card.Text>
                    )} 
                    {
                    show ? (                 
                        <Card.Text>"Success! Balance: $"${currentUser.balance}</Card.Text>
                    ) : null
                    }   
            </Card.Body>
        </Card>
    );
}
export default BankTransaction;
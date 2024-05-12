import React from "react";
import {Card} from "react-bootstrap";
import { UserContext } from "../context";

export function Withdraw() {
    const ctx = React.useContext(UserContext)
    let currentUser = ctx.loggedIn[0]
    const [value, setValue]    = React.useState('');
    const [update, setUpdate]  = React.useState('false');
    const [show, setShow]      = React.useState(true);

    const handleTextChange = (e) => {
        setValue(e.target.value);
    }

    function handleWithdraw() {
        let balance = document.getElementById("balance").value
        if (value > 0 && currentUser.user.balance >= value && !isNaN(value)) {
            currentUser.user.baalnce -= Number(value);
            setUpdate('true');
            setShow('false');
        } else {
            alert('Transaction failed, please ensure you are using only numbers and can sufficiantly fund the transaction you are making.')
        }
    }

    return (
        <Card 
            txtcolor="white"
            bgcolor="dark"
            header="Withdraw"
            body={
                show ? (
                    currentUser ? (
                        <>
                            <h5>
                                {update
                                ? "Balance: " + currentUser.user.balance
                                : "Balance: " + currentUser.user.balance}
                            </h5>
                            <h6>Withdraw Amount</h6>
                            <input 
                                type="number"
                                with="200"
                                id="balance"
                                onChange={handleTextChange}
                                value={value}
                            ></input>
                            <button
                                type="submit"
                                disabled={value ? false : true}
                                className="btn btn-light"
                                onClick={handleWithdraw}
                            >
                                Withdraw
                            </button>
                        </>
                    ) : (
                        "Please log in or create an account with us."
                    )
                ) : (
                    "success! Balance: $" + currentUser.user.balance
                )
            }
        />
    );
}
export default Withdraw;
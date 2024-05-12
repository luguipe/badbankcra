import React from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "../context";

export function AllData(){
    const ctx = React.useContext(UserContext);
    const userData = ctx.users;

    function createUserCard(user){
        const {name, email, password, balance } = user;
        let userKey = {email} + {password};

        return (
            <Card 
                key = {userKey}
                header = "User Data"
                bgcolor = "dark"
                body = {
                    <>
                    <p className="card-text">Name: {name}</p>
                    <p className="card-text">Email: {email}</p>
                    <p className="card-text">Password: {password}</p>
                    <p className="card-text">Balance: {balance}</p>    
                    </>
                }
            />
        );
    }

    const userCards = userData.map(createUserCard);

    return (
        <div>
        {userCards}
        </div>
    )
}
export default AllData;
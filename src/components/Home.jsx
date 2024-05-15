import React from "react";
import { Card } from "react-bootstrap";

export function Home(){
    return (
        <Card bg="light" text="black" >
            <Card.Header>Bad Bank Home</Card.Header>   
            <Card.Text>Welcome to the bank</Card.Text>
            <Card.Text>I wouldn't trust a bank, specially a bad one.</Card.Text>
            <Card.Img variant="top" src="badBankBuilding.png" />
        </Card>
    );
}
export default Home;
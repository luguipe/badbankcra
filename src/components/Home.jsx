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

export function Home(){
    return (
        <Card 
            txtcolor="white"
            bgcolor="dark"
            header="Aria's Sketchy Bank"
            title="Welcome to the most unreliable online bank."
            text="Never expect to see your money back."
            body={(<img src="bank.png" className="img-fluid" alt="responsive img" />)}
        />
    );
}
export default Home;
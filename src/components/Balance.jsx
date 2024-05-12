import React, { useContext } from "react";
import { Card, Accordion, Button, Container, Row, Col, Image, ListGroup, ListGroupItem, Input } from "react-bootstrap";
import axios from "axios";
import { UserContext } from "./context";

function Balance() {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>Balance</h1>
      <p>{`Hello ${user.name}, your current balance is ${user.balance}.`}</p>
    </>
  );
}

export default Balance;

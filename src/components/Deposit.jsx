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
import BankTransaction from "./BankTransaction";
  
export function Deposit(){
    return (
        <BankTransaction transactionType="Deposit"/>
    )
}
export default Deposit;
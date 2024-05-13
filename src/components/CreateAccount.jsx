import React, { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "../context";

function CreateAccount() {
  const ctx = useContext(UserContext);
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validate = (field, label) => {
    let isValid = true;
    if (!field) {
      setStatus(`Error: Please examine the ${label} field.`);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    if (label === 'email') {
      isValid = String(field).toLowerCase().match(/\S+@\S+\.\S+/);
      setStatus(isValid ? '' : "Email is invalid, please use a valid email format.");
    }
    if (label === 'password') {
      isValid = field.length >= 6;
      setStatus(isValid ? '' : "Password is too short, please choose a longer one.");
    }
    return isValid;
  };

  const handleNewAccountCreation = () => {
    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    ctx.users.push({ name, email, password, balance: 0 });
    setShow(false);
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  };

  return (
    <Card bg="dark" text="white">
      <Card.Header>Create Account</Card.Header>
      <Card.Body>
        {show ? (
          <>
            <Card.Title>Name</Card.Title>
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <Card.Title>Email Address</Card.Title>
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <Card.Title>Password</Card.Title>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleNewAccountCreation}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Success, please confirm account creation:</h5>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={clearForm}
            >
              Confirm
            </button>
          </>
        )}
        {status && <div id="createStatus">{status}</div>}
      </Card.Body>
    </Card>
  );
}

export default CreateAccount;

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from "./context";
import { BankProvider } from "./components/BankContext";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import AllData from "./components/Alldata";

function App() {
  return (
    <Router>
      <NavBar />
      <UserContext.Provider
        value={{ users: [{ username: 'luizperez', name: "Luiz", email: "Luiz@test.edu", password: "secret", balance: 100 }] }}
      >
        <div className="container" style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createAccount/" element={<CreateAccount />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/deposit/" element={<Deposit />} />
            <Route path="/withdraw/" element={<Withdraw />} />
            <Route path="/alldata/" element={<AllData />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;


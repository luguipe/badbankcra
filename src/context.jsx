import React, { createContext, useContext, useEffect, useState } from "react";

const initialUserState = {
  users: [], // Your user data
  loggedInUser: null,
  loginUser: (name,email, pwd, balance ) => {}, // Placeholder function
  logoutUser: () => {}, // Placeholder function
};

export const UserContext = createContext(initialUserState);

export const UserProvider = ({  children }) => {

  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const localUser = localStorage.getItem("loggedInUser");
    console.log(localUser);
    if (localUser) {setLoggedInUser(JSON.parse(localUser));}
    
    setUsers([{ name: "luiz", email: "luiz@test.com", password: "secret", balance: 100 }]);
  }, []);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

  const changeBalance = (amount) => {
    const userIndex = users.findIndex(user => user.email === loggedInUser.email)

        if(userIndex < 0) {
        return {okay: false, message: "User not found"};
        }

        const balance = loggedInUser.balance + amount;
        if(balance < 0) {
            return {okay: false, message: "Insufficient funds"};
        }

        setUsers(currentUsers => {
            currentUsers[userIndex] = {...loggedInUser, balance};
            return [...currentUsers];
        })

        setLoggedInUser(curruentLoggedInUser => ({...curruentLoggedInUser, balance}));
        return {okay: true, message: "Success"};
    }

  const loginUser = (email, password)  => {
    if (!email || !password) {
      return false;
    }
    const user = users.find((user) => user.email === email);

    if (!user || user.password !== password) {
      return false;
    }

    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user)); // Save to local storage
    return true;
  }

  const logoutUser = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  }

  return (
    <UserContext.Provider
      value={{ users, loginUser, logoutUser, loggedInUser, addUser, updateUser, changeBalance }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = ()=> useContext(UserContext);


// import React from "react";
// import * as ReactBootstrap from "react-bootstrap";
// import axios from "axios";
// import { ReactDOM } from "react";
// import ReactRouterDOM from 'react';
// import { createContext } from "react";



// const Route       = ReactRouterDOM.Route;
// const Link        = ReactRouterDOM.Link;
// const HashRouter  = ReactRouterDOM.HashRouter;
// export const UserContext = React.createContext(null);

// export function Card(props) {
//     function classes() {
//         const bg = props.bgcolor ? ' bg-' + props.bgcolor : '';
//         const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
//         return 'card mb-3 ' + bg + txt;
//     }

//     return (
//         <div className={classes()} style={{maxWidth: "18rem"}}>
//             <div className="card-header">{props.header}</div>
//             <div className = "card-body">
//                 {props.title && (<h5 className="card-title">{props.title}</h5>)}
//                 {props.text && (<p className="card-text">{props.text}</p>)}
//                 {props.body}
//                 {props.status && (<div id="createStatus">{props.status}</div>)}
//             </div>
//         </div>
//     );
// }

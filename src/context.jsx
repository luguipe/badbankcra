import React, { createContext, useState } from "react";

const initialUserState = {
  users: [], // Your user data
  loggedInUser: null,
  setLoggedInUser: (user) => {}, // Placeholder function
};

export const UserContext = createContext(initialUserState);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

  return (
    <UserContext.Provider
      value={{ users, loggedInUser, setLoggedInUser, addUser, updateUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

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

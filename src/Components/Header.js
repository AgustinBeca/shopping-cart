import React, { useState, useEffect } from "react";

import "./Header.css";

import { FaCartShopping } from 'react-icons/fa6';


function Header() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const user = users[2];
  //console.log(user);

  let initials = "";

  if (user) {
    //console.log(user.name.firstname[0]);
    //console.log(user.name.lastname[0]);
    initials = user.name.firstname[0].toUpperCase() + user.name.lastname[0].toUpperCase();
  }

  //console.log(initials);

  return (
    <div className="header">
      <div className="column">
        <FaCartShopping color="white" size={50} />
      </div>
      <div className="column">
        <h1 className="header-title">Carrito de Compras</h1>
      </div>
      <div className="column">
        {user ? (
          <button className="profile-logo">{initials}</button>
        ) : (
          <button className="profile">...</button>
        )}
      </div>
    </div>
  )
};

export default Header;
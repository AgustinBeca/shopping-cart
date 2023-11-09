import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <header className="header">
      <div className="column">
        <Link to='/cart'>
          <FaCartShopping class="icon" color="white" size={50} />
        </Link>
      </div>
      <div className="column">
        <Link to="/">
          <h1 className="header-title">Listado de Productos</h1>
        </Link>
      </div>
      <div className="column">
        {user ? (
          <button className="profile-logo">{initials}</button>
        ) : (
          <button className="profile">...</button>
        )}
      </div>
    </header>
  )
};

export default Header;
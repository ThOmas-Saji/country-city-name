import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <div className="navbar">
        <Link to="/" >Home</Link>
        <Link to="/add-country" >Add country</Link>
        <Link to="/add-city" >Add city</Link>
    </div>
  );
};

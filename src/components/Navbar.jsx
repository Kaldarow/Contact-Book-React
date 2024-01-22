import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <h2 className="logo">Contact Book</h2>
      <div className="navigation ">
        <NavLink to={""}>
          <button className="btn-nav">Home</button>
        </NavLink>
        <NavLink to={"AddContact"}>
          <button className="btn-nav">Add Contact</button>
        </NavLink>
        <NavLink to={"ContactList"}>
          <button className="btn-nav">Contact List</button>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;

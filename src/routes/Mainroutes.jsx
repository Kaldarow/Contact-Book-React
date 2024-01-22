import React from "react";
import { Routes, Route } from "react-router-dom";
import AddContact from "../components/AddContact";
import ContactDetails from "../components/ContactDetails";
import ContactList from "../components/ContactList";
import EditContact from "../components/EditContact";
import HomePage from "../components/HomePage";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ContactList" element={<ContactList />} />
      <Route path="/AddContact" element={<AddContact />} />
      <Route path="/EditContact/:id" element={<EditContact />} />
      <Route path="/ContactDetails/:id" element={<ContactDetails />} />
    </Routes>
  );
};

export default Mainroutes;

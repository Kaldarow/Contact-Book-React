import React, { createContext, useEffect, useState } from "react";
import { API } from "../helpers/const";
import axios from "axios";

export const ContactContext = createContext();
const ContactContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  // ! create   
  const addContact = async (contacts) => {
    await axios.post(API, contacts);
  };
  // ! read
  const getContacts = async () => {
    try {
      const { data } = await axios(API);
      setContacts(data)
      return data
    } catch (error) {
      console.log(error);
    }
  };
  // ! edit 
  async function setEdit(id, obj) {
    await axios.patch(`${API}/${id}`, obj);
  }
  const values = {
    addContact,
    getContacts,
    contacts,
    setEdit
  };
  return(
    <ContactContext.Provider value={values}>{children}</ContactContext.Provider>
  )
};

export default ContactContextProvider;

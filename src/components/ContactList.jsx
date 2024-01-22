import React, { useContext, useEffect } from "react";
import { ContactContext } from "../context/ContactContextProvider";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const { getContacts, contacts } = useContext(ContactContext);
  
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div>
      {contacts.map((elem) => (
        <ContactCard {...elem} key={elem.id} />
      ))}
    </div>
  );
};

export default ContactList;
import React, { useContext, useEffect, useState } from "react";
import { ContactContext } from "../context/ContactContextProvider";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
    const navigate = useNavigate()
  const { addContact } = useContext(ContactContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");

  const handleClick = () => {
    if (!name && !surname && !phone && !img) {
      return;
    }
    let newContact = {
      name: name,
      surname: surname,
      phone: phone,
      img: img,
    };
    addContact(newContact);
    setName("");
    setSurname("");
    setPhone("");
    setImg("");
    navigate('/ContactList')
  };
  return (
    <div>
    <div className="container-home"></div>
    <div className="container-add">
      <div className="wrapper">
        <div className="form-box add">
          <h2>Add Contact</h2>
          <p>Complete the form, to add a new Contact</p>
          <form action="">
            <div className="input-box">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
              />
              <label>Name</label>
            </div>
            <div className="input-box">
              <input
                onChange={(e) => setSurname(e.target.value)}
                type="text"
                required
              />
              <label>Surname</label>
            </div>
            <div className="input-box">
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                required
              />
              <label>Phone</label>
            </div>
            <div className="input-box">
              <input
                onChange={(e) => setImg(e.target.value)}
                type="text"
                required
              />
              <label>image</label>
            </div>
            <button onClick={handleClick} className="btn-add-card">
              Save Contact
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddContact;

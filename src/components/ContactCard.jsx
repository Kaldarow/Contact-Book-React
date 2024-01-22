import axios from "axios";
import React, { useContext } from "react";
import { API } from "../helpers/const";
import { Link } from "react-router-dom";
import { ContactContext } from "../context/ContactContextProvider";

const ContactCard = ({ name, surname, phone, img, id }) => {
  const { getContacts } = useContext(ContactContext);
  const deleteContact = async (id) => {
    await axios.delete(`${API}/${id}`);
    getContacts();
  };
  return (
    <div className="container-card">
      <div className="wrapper-card">
        <div className="form-box card">
          <h3>
            {name} {surname}
          </h3>
          <div className="contact-info">
            <div className="card-img">
              <img src={img} alt="" />
            </div>
            <div className="phone-info">
              <p>{phone}</p>
            </div>
            <Link to={`/EditContact/${id}`}>
              <button className="btn-add-card">Edit</button>
            </Link>
            <button  onClick={() => deleteContact(id)} className="btn-add-card">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

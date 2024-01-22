import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../helpers/const";
import axios from "axios";
import { ContactContext } from "../context/ContactContextProvider";

const EditContact = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {setEdit} = useContext(ContactContext)
  async function getContact(id) {
    const { data } = await axios(`${API}/${id}`);
    setContact(data);
  }
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    getContact(id);
  }, [id]);
  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setSurname(contact.surname);
      setPhone(contact.phone);
      setImg(contact.img);
    }
  }, [contact]);
  function editor() {
    if (!name && !surname && !phone && !img) {
      return;
    }
    const newCont = {
      name: name,
      surname: surname,
      phone: phone,
      img: img,
    };
    setEdit(id, newCont);
    navigate("/ContactList");
  }
 

  return (
    <div>
      <div className="container-home"></div>
      <div className="container-add">
        <div className="wrapper">
          <div className="form-box add">
            <h2>Add Contact</h2>
            <p>Complete the form, to edit a Contact</p>
            <form action="">
              <div className="input-box">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required
                />
                <label>Name</label>
              </div>
              <div className="input-box">
                <input
                value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  type="text"
                  required
                />
                <label>Surname</label>
              </div>
              <div className="input-box">
                <input
                value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  required
                />
                <label>Phone</label>
              </div>
              <div className="input-box">
                <input
                value={img}
                  onChange={(e) => setImg(e.target.value)}
                  type="text"
                  required
                />
                <label>image</label>
              </div>
              <button onClick={editor} className="btn-add-card">
                Save Contact
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContact;

import React, { useEffect, useRef, useState } from "react";
import { useContacts } from "../contexts/ContactsProvider";

export const NewContactModal = ({ toggleModal, isModalOpen }) => {
  const idRef = useRef();
  const nameRef = useRef();
  const [modal, setModal] = useState(false);
  const { createContact } = useContacts();

  useEffect(() => {
    setModal(!modal);
  }, [isModalOpen]);

  const closeModal = () => {
    setModal(!modal);
    setTimeout(() => {
      toggleModal();
    }, 500);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createContact(idRef.current.value, nameRef.current.value);
    closeModal();
  };
  return (
    <>
      <div className="screen"></div>
      <div className={`modal ${modal ? "modal-open" : "modal-closed"}`}>
        <div className="modal-header">
          <h4>Add New Contact</h4>
          <button onClick={() => closeModal()} className="btn btn-secondary">
            X
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <label htmlFor="id">Id</label>
            <input type="text" ref={idRef} id="id" required />
            <label htmlFor="name">Name</label>
            <input type="text" ref={nameRef} id="name" required />
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

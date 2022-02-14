import React, { useEffect, useState } from "react";
import { useContacts } from "../contexts/ContactsProvider";
import { useConversations } from "../contexts/ConversationsProvider";

export const NewConversationModal = ({ toggleModal, isModalOpen }) => {
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { contacts } = useContacts();
  // const { conversations } = useConversations();
  const { createConversation } = useConversations();
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(!modal);
    setTimeout(() => {
      toggleModal();
    }, 500);
  };

  useEffect(() => {
    setModal(!modal);
  }, [isModalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("selectedContactIds", selectedContactIds);
    createConversation(selectedContactIds);
    closeModal();
  };
  const handleCheckBox = (contactId) => {
    setSelectedContactIds((prevSelectedContactIds) => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((prevId) => {
          return contactId !== prevId;
        });
      } else {
        return [...prevSelectedContactIds, contactId];
      }
    });
  };
  return (
    <>
      <div className="screen"></div>
      <div className={`modal ${modal ? "modal-open" : "modal-closed"}`}>
        <div className="modal-header">
          <h4>Create New Conversation</h4>
          <button onClick={() => closeModal()} className="btn btn-secondary">
            X
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            {contacts.map((contact) => (
              <div className="checkbox-field" key={contact.id}>
                <input
                  type="checkbox"
                  value={selectedContactIds.includes(contact.id)}
                  label={contact.name}
                  name={contact.name}
                  onChange={() => handleCheckBox(contact.id)}
                />
                <label htmlFor={contact.name}>{contact.name}</label>
              </div>
            ))}
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

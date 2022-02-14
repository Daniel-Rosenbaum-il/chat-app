import React, { useState } from "react";
import { Contacts } from "./Contacts";
import { Conversation } from "./Conversation";
import { NewContactModal } from "./NewContactModal";
import { NewConversationModal } from "./NewConversationModal";

export const Sidebar = ({ id }) => {
  const [contactsActive, setContactsActive] = useState(false);
  const [conversationActive, setConversationActive] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const setActiveTab = () => {
    setContactsActive(!contactsActive);
    setConversationActive(!conversationActive);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="sidebar">
      <div className="tabs">
        <div className="tab-bottom-border"></div>
        <div
          className={`conversations ${
            conversationActive ? "tab-active" : "tab-not-active"
          }`}
        >
          <button
            className={`btn ${
              conversationActive ? "btn-active" : "btn-not-active"
            }`}
            onClick={() => setActiveTab()}
          >
            Conversations
          </button>
        </div>
        <div
          className={`contacts ${
            contactsActive ? "tab-active" : "tab-not-active"
          }`}
        >
          <button
            className={`btn ${
              contactsActive ? "btn-active" : "btn-not-active"
            }`}
            onClick={() => setActiveTab()}
          >
            Contacts
          </button>
        </div>
        <div className="tab-bottom-border"></div>
      </div>
      <div className="sidebar-content">
        {conversationActive && <Conversation />}
        {contactsActive && <Contacts />}
      </div>
      <div className="user-info">
        Your Id: <span>{id}</span>
      </div>
      <button
        className="btn btn-primary round-0"
        onClick={() => {
          toggleModal();
        }}
      >
        {conversationActive ? "New Conversation" : "New Contact"}
      </button>

      {isModalOpen && conversationActive && (
        <NewConversationModal
          toggleModal={toggleModal}
          isModalOpen={isModalOpen}
        />
      )}
      {isModalOpen && contactsActive && (
        <NewContactModal toggleModal={toggleModal} isModalOpen={isModalOpen} />
      )}
    </section>
  );
};

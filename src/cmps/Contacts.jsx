import React from "react";
import { useContacts } from "../contexts/ContactsProvider";

export const Contacts = () => {
  const { contacts } = useContacts();

  return (
    <div className="contacts-list sidebar-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
};

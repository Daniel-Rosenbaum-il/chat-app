import React from "react";
import { useConversations } from "../contexts/ConversationsProvider";

export const Conversation = () => {
  const { conversations, selectConversationIndex } = useConversations();

  return (
    <div className="conversations-list-content sidebar-list">
      <ul>
        {conversations.map((conversation, index) => (
          <li
            className={`conversation-li ${
              conversation.selected ? "selected" : ""
            }`}
            key={index}
            onClick={() => selectConversationIndex(index)}
          >
            {conversation.recipients
              .map((recipient) => recipient.name)
              .join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

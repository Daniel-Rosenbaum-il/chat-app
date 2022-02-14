import React, { useCallback, useState } from "react";
import { useConversations } from "../contexts/ConversationsProvider";

export const OpenConversation = () => {
  const [text, setText] = useState("");
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);
  const { sendMessage, selectedConversation } = useConversations();

  const handleSubmit = (e) => {
    e.preventDefault();

    sendMessage(
      selectedConversation.recipients.map((r) => r.id),
      text
    );
    setText("");
  };

  return (
    <div className="open-conversation">
      <div className="conversation-content">
        <div className="messages-content">
          {selectedConversation.messages.map((message, index) => {
            const lastMessage =
              selectedConversation.messages.length - 1 === index;
            return (
              <div
                ref={lastMessage ? setRef : null}
                className={`message-body ${
                  message.fromMe ? "align-left" : "align-right"
                }`}
                key={index}
              >
                <div
                  className={`message-text ${
                    message.fromMe
                      ? "text-background-gray"
                      : "text-background-red"
                  }`}
                >
                  {message.text}
                </div>
                <div className="message-sender">
                  {message.fromMe ? "you" : message.senderName}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          required
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

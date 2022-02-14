import React, { useEffect } from "react";
import { useConversations } from "../contexts/ConversationsProvider";
import { OpenConversation } from "./OpenConversation";
import { Sidebar } from "./Sidebar";

export const Dashboard = ({ id }) => {
  const { selectedConversation } = useConversations();

  useEffect(() => {
    console.log("selectedConversation", selectedConversation);
  }, [selectedConversation]);
  return (
    <div className="dashboard">
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
};

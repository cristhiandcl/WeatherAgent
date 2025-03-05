// @ts-nocheck
import React, { useState } from "react";

// CSS
import "./app.css";
import "./fonts/fonts.css";

//Components
import ChatBox from "./components/ChatBox";

function App() {
  const [showChat, setShowChat] = useState(true);
  return (
    <div className="merli-bot-chat-parent">
      <ChatBox showChat={showChat} setShowChat={setShowChat} />
    </div>
  );
}

export default App;

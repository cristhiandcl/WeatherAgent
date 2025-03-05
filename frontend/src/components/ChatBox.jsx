import React, { useState, useRef, useEffect } from "react";

import { iconAlert } from "../utils/icons";

import { FirstMessageRendering } from "../utils/firstMessage/renderFirstMessage";

import Content from "./chatbox/Content";
import Header from "./chatbox/Header";
import CloseChat from "./chatbox/header/CloseChat";
import UserInput from "./chatbox/UserInput";

const date = new Date();
const day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

function ChatBox({ showChat, setShowChat }) {
  const [chatH, setChatH] = useState([]);
  const [isDisable, setIsDisable] = useState(false);
  const [restoreMerli, setRestoreMerli] = useState(false);
  const [abortController, setAbortController] = useState(null);
  const textareaRefMerliBox = useRef(null);
  const cancelGetRequest = useRef(null);
  const [showChatAlert, setShowChatAlert] = useState(false)

  useEffect(() => {
    FirstMessageRendering(iconAlert, day, month, year, setChatH);
  }, [restoreMerli]);


  return (
    <>
      {showChatAlert === true ? (
        <CloseChat
          setIsDisable={setIsDisable}
          abortController={abortController}
          setAbortController={setAbortController}
          cancelGetRequest={cancelGetRequest}
          setRestoreMerli={setRestoreMerli}
          showChat={showChat}
          setShowChat={setShowChat}
        />
      ) : (
        <div
          //Check if the user close or open the chat
          className={
            !showChat
              ? "merli-bot-chat-container-hide"
              : "merli-bot-chat-container"
          }
        >
          {/* Top of the chat */}
          <Header
            showChat={showChat}
            setShowChat={setShowChat}
          />
          {/* Messages container */}

          <div className="merli-bot-chat-bot-msg-cont">
            <Content
              chatH={chatH}
              reference={textareaRefMerliBox}
            />
          </div>
          {/* Input text */}
          <UserInput
            setChatH={setChatH}
            abortController={abortController}
            setAbortController={setAbortController}
            setIsDisable={setIsDisable}
            isDisable={isDisable}
            setRestoreMerli={setRestoreMerli}
            textareaRefMerliBox={textareaRefMerliBox}
          />
        </div>
      )}
    </>
  );
}

export default ChatBox;

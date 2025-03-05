import React, { useState } from "react";

import { IconContext } from "react-icons";
import { BiSend } from "react-icons/bi";


import { callAPI } from "../../APIs/agentAnswer";

function UserInput({
  setChatH,
  abortController,
  setAbortController,
  setIsDisable,
  isDisable,
  setRestoreMerli,
  infoPlan,
  textareaRefMerliBox,
  setUpdateCredentials,
}) {
  const [chatText, setChatText] = useState("");


  // RENDERING NOT INPUT MESSAGE
  const handleEmptyInputMessage = (event) => {
    event.preventDefault();
    setChatText("")
    setChatH((prev) => [
      ...prev,
      {
        value: (
          <p className="merli-bot">
            Ooops🙁!!! Parece que no has enviado ningun mensaje, por favor preguntame de nuevo para poder ayudarte.
          </p>
        ),
        type: "bot",
      },
    ]);
  }


  // HANDLE SUBMIT ON ENTER
  const handleKeyPress = (event) => {

    if (event.key === "Enter" && !event.shiftKey) {
      if (chatText.trim() != "") {
        callAPI(
          event,
          abortController,
          setAbortController,
          setChatText,
          setChatH,
          setIsDisable,
          setRestoreMerli,
          chatHistory,
          chatText,
          infoPlan,
          setUpdateCredentials
        );
      } else {
        handleEmptyInputMessage(event);
      }
    }
  };



  // RENDERING CHAT HISTORY
  function chatHistory(result) {
    setChatH((prev) => prev.slice(0, -1));
    setChatH((prev) => [
      ...prev,
      { value: result, type: "bot" },
    ]);
  }

  return (
    <form
      onSubmit={(e) => {
        callAPI(
          e,
          abortController,
          setAbortController,
          setChatText,
          setChatH,
          setIsDisable,
          setRestoreMerli,
          chatHistory,
          chatText,
          infoPlan
        )
      }}
      className="merli-bot-form"
    >
      <div className="merli-bot-chat-bot-input">
        <textarea
          ref={textareaRefMerliBox}
          className="merli-bot-msg-input"
          placeholder="Type something..."
          value={chatText}
          onChange={(e) => setChatText(e.target.value)}
          disabled={isDisable ? true : false}
          onKeyDown={handleKeyPress}
        ></textarea>
        {/* Send message Button */}
        <div className="merli-bot-buttons-send-msg-and-speaker">
          <button
            type={chatText.trim() !== "" ? "submit" : "button"}
            className="merli-bot-send-msg"
            disabled={isDisable}
            onClick={(e) => chatText.trim() == "" && handleEmptyInputMessage(e)}
            title="Send Message"
          >
            <IconContext.Provider
              value={{ className: "merli-bot-react-icons" }}
            >
              <BiSend />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </form>
  );
}

export default UserInput;

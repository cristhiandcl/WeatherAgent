import React from "react";

function CloseChat({
  setIsDisable,
  setNewNotification,
  abortController,
  setAbortController,
  cancelGetRequest,
  setRestoreMerli,
  showChat,
  setShowChat,
  setShowChatAlert,
}) {
  // CLOSE MERLI CHAT
  function closeChat(e, value) {
    e.preventDefault();

    if (value === "yes") {
      // RESTORING ALL VALUES
      setIsDisable(false);
      setNewNotification(true);

      // Abort merli endpoint request
      if (abortController) {
        abortController.abort();
        setAbortController(null); // Reset the controller
      }

      //CANCELLING MERLI REQUEST
      if (cancelGetRequest.current) {
        cancelGetRequest.current("Get request has been canceled!!");
      }

      setRestoreMerli((prev) => !prev);
      setShowChat(false);
      setShowChatAlert(false);
    } else {
      setShowChatAlert(false);
    }
  }

  return (
    <div
      className={
        !showChat
          ? "merli-bot-chat-container-alert-hide"
          : "merli-bot-chat-container-alert"
      }
    >
      <p
        className="merli-bot"
        style={{
          fontWeight: "bold",
          fontSize: "16px",
          textAlign: "center",
        }}
      >
        Estas seguro de finalizar la conversación ?
      </p>
      <div className="merli-bot-chat-container-alert-buttons">
        <button
          className="merli-bot-container-alert-btn"
          onClick={(e) => closeChat(e, "yes")}
        >
          Finalizar
        </button>
        <button
          className="merli-bot-container-alert-btn"
          onClick={(e) => closeChat(e, "no")}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default CloseChat;

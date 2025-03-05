// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useRef, } from "react";

//IMG
import merliChat from "../../assets/weather.png";

import TextRendering from "./content/TextRendering";

function Content({ chatH, reference }) {
  const messagesEndRef = useRef(null);

  function scrollToBottom() {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      reference.current?.focus();
    }, 1000);
  }

  useEffect(() => {
    scrollToBottom();
  }, [chatH]);

  return (
    <>
      {chatH.map((item, index) => {
        return (
          <div key={index} className="merli-bot">
            {item.type == "human" ? (
              <div className="merli-bot-human-msg">
                <div className="merli-bubble-human">
                  <div className="merli-bot-user-msg">{item.value}</div>
                  <p className="hour">{item.hour}</p>
                </div>
              </div>
            ) : item.type == "bubble" ? (
              <div className="merli-bot-bot-msg">
                <div className="" style={{ width: "40px" }}></div>
                <div className="merli-bot-bubble-hour">
                  <div className="merli-bot-chat-bot-msg-additional-bubbles">
                    <>{item.value}</>
                  </div>
                  <p className="hour">{item.hour}</p>
                </div>
              </div>
            ) : (
              <div className="merli-bot-bot-msg">
                <div className="merli-bot-merli">
                  <img src={merliChat}></img>
                </div>
                <div className="merli-bot-bubble-hour">
                  <div className="merli-bot-chat-bot-msg">
                    {typeof item.value != "string" ? (
                      <>{item.value}</>
                    ) : (
                      <TextRendering item={item} />
                    )}
                  </div>
                  <p className="hour">{item.hour}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <div ref={messagesEndRef} className="merli-bot" />
    </>
  );
}

export default Content;

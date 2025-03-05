import React from "react";
import merliIcon from "../../assets/weather.png";

function Header() {
  return (
    <div className="merli-bot-chat-top">
      <div className="merli-bot-icon-chat-top">
        <img className="merli-icon" src={merliIcon}></img>
        <p className="merli-bot-chat-top-paragraph">Weather Agent</p>
      </div>
    </div>
  );
}

export default Header;

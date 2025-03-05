import React from "react";
import { IconContext } from "react-icons";
import { MdOutlineNotifications } from "react-icons/md";
import { BiMicrophone } from "react-icons/bi";

//Loader
import { ThreeDots } from "react-loader-spinner";

// LOADING ICON
const loader = (
  <ThreeDots
    height="30"
    width="30"
    radius="9"
    color="#56070c"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    visible={true}
  />
);

// NOTIFICATIONS ICON
const iconAlert = (
  <IconContext.Provider value={{ className: "merli-bot-alert-icon" }}>
    <MdOutlineNotifications />
  </IconContext.Provider>
);

// SPEECH ICON
const icon = (
  <IconContext.Provider value={{ className: "merli-bot-react-icons" }}>
    <BiMicrophone />
  </IconContext.Provider>
);

const initialLoader = (
  <div className="merli-bot-initial-loader">
    <p
      className="melri-bot"
      style={{ marginRight: "10px", fontWeight: "bold" }}
    >
      Cargando información
    </p>
    <div
      className="merli-bot"
      style={{ display: "flex", alignItems: "flex-end" }}
    >
      <ThreeDots
        height="20"
        width="20"
        radius="10"
        color="#56070c"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  </div>
);

export { initialLoader, loader, iconAlert, icon };

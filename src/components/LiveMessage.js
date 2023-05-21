import React from "react";
import userIcon from "../assets/user-icon.png";

const LiveMessage = ({ name, message }) => {
  return (
    <div className="flex items-center mt-4">
      <img className="h-6 " alt="user" src={userIcon} />
      <div>
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default LiveMessage;

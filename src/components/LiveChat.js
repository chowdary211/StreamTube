import React, { useEffect } from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { getRandomName, getRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: getRandomName(),
          message: getRandomMessage(20),
        })
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="ml-4 mt-4 flex flex-col-reverse">
        {messages.map((m, i) => (
          <LiveMessage key={i} name={m.name} message={m.message} />
        ))}
      </div>
    </>
  );
};

export default LiveChat;

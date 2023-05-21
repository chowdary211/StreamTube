import React, { useEffect, useState } from "react";
import { closeMenu, closeButtonList } from "../utils/AppSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { API_KEY_COMMENTS_API, VIDEO_INFO_API } from "../utils/contants";
import LikeCountIcon from "../assets/LikeCountIcon.png";
import VerifiedIcon from "../assets/VerifiedIcon.png";
import LiveChat from "./LiveChat";
import { addMessage } from "../utils/ChatSlice";

const WatchPage = () => {
  const [videoInfo, setVideoInfo] = useState([]);
  const [chatMessage, setChatMessage] = useState();
  const [searchParams] = useSearchParams();
  const { snippet, statistics } = videoInfo;

  const dispatch = useDispatch();

  useEffect(() => {
    getVideoInfo();
    dispatch(closeMenu());
    dispatch(closeButtonList());
  }, []);

  const getVideoInfo = async () => {
    const data = await fetch(
      VIDEO_INFO_API + searchParams.get("v") + API_KEY_COMMENTS_API
    );
    const json = await data.json();
    setVideoInfo(json.items[0]);
  };

  if (!(snippet || statistics)) return null;
  return (
    <div className="ml-28">
      <div className="mt-20 flex">
        <iframe
          width="900"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="flex flex-col">
          <div className="flex flex-col-reverse ml-4 overflow-y-scroll bg-slate-50 rounded-xl w-[400px] h-[550px] border border-gray-300">
            <LiveChat />
          </div>
          <form
            className="ml-5 mt-2"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                addMessage({
                  name: "😎Prasad✌️",
                  message: chatMessage,
                })
              );
              setChatMessage();
            }}
          >
            <input
              className="w-[340px] border border-gray-400 rounded-lg"
              type="text"
              onChange={(e) => setChatMessage(e.target.value)}
            />
            <button className="bg-slate-300 ml-2 px-2 rounded-md">send</button>
          </form>
        </div>
      </div>

      <div>
        <p className="-mt-16 text-lg font-bold">{snippet.title}</p>
        <div className="flex mt-2 items-center">
          <p className="mt-2 font-bold">{snippet.channelTitle}</p>
          <img
            className="h-4 px-1 mt-3"
            alt="verifiedicon"
            src={VerifiedIcon}
          />
          <div className=" flex mt-3 ml-2 py-1 px-2 border border-gray-200 rounded-lg bg-gray-100">
            <img className="h-5" alt="LikeIcon" src={LikeCountIcon} />
            <p className="px-1">
              {statistics.likeCount > 1000000
                ? (statistics.likeCount / 1000000).toFixed(1) + "M"
                : (statistics.likeCount / 1000).toFixed(0) + "K"}
            </p>
          </div>
        </div>
      </div>

      <CommentsContainer id={searchParams.get("v")} />
    </div>
  );
};

export default WatchPage;

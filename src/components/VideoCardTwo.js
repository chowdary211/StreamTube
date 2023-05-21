import React from "react";
import VerifiedIcon from "../assets/VerifiedIcon.png";

const VideoCardTwo = ({ info }) => {
  if (!info) return null;
  return (
    <div className="flex">
      <img
        className="rounded-2xl mr-2 py-2"
        alt="thumbnail"
        src={info.thumbnails.medium.url}
      />
      <div>
        <p className="font-bold py-2">{info.title}</p>
        <div className="flex">
          <p>{info.channelTitle}</p>
          <img
            className="h-3 px-1 mt-2"
            alt="verifiedicon"
            src={VerifiedIcon}
          />
        </div>
        <p className="mt-2">{info.description}</p>
      </div>
    </div>
  );
};

export default VideoCardTwo;

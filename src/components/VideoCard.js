import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;
  const { snippet, statistics } = info;

  return (
    <div className="m-5 w-72">
      <img
        className="rounded-lg shadow-lg"
        alt="thumbnail"
        src={snippet.thumbnails.medium.url}
      />
      <ul className="shadow-sm">
        <li className="pt-1 font-bold">{snippet.localized.title}</li>
        <li>{snippet.channelTitle}</li>
        <li>
          {statistics.viewCount > 1000000
            ? (statistics.viewCount / 1000000).toFixed(1) + "M views"
            : (statistics.viewCount / 1000).toFixed(0) + "K views"}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;

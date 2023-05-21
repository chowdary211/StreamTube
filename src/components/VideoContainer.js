import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/contants";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openButtonList } from "../utils/AppSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getVideos();
    dispatch(openButtonList());
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap mx-auto w-4/5 mt-28">
      {videos &&
        videos.map((video) => (
          <Link key={video.id} to={"watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;

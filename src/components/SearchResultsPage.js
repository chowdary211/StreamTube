import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { API_KEY_COMMENTS_API, VIDEO_SEARCH_API } from "../utils/contants";
import { useDispatch } from "react-redux";
import VideoCardTwo from "./VideoCardTwo";
import { openMenu } from "../utils/AppSlice";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [videoInfo, setVideoInfo] = useState();
  const searchWord = searchParams.get("search_query");
  const dispatch = useDispatch();
  useEffect(() => {
    getVideos();
    // dispatch(openMenu());
  }, []);

  const getVideos = async () => {
    const data = await fetch(
      VIDEO_SEARCH_API + searchWord + "&type=video" + API_KEY_COMMENTS_API
    );
    const json = await data.json();
    setVideoInfo(json.items);
  };
  if (!videoInfo) return null;
  return (
    <div className="mt-32 mr-2">
      {videoInfo.map((v) => (
        <Link to={"watch?v=" + v.id.videoId} key={v.id.videoId}>
          <VideoCardTwo info={v.snippet} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResultsPage;

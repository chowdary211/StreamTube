import React, { useEffect, useState } from "react";
import { API_KEY_COMMENTS_API, YOUTUBE_COMMENTS_API } from "../utils/contants";
import Comment from "./Comment";
const CommentsContainer = ({ id }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const data = await fetch(YOUTUBE_COMMENTS_API + id + API_KEY_COMMENTS_API);
    const json = await data.json();
    setComments(json.items);
  };

  return (
    <div className="mt-10">
      <div>
        <h1 className="text-xl font-bold">Comments</h1>
      </div>
      <div>
        {comments &&
          comments.map((data) => <Comment key={data.id} data={data} />)}
      </div>
    </div>
  );
};

export default CommentsContainer;

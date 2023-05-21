import React from "react";
import { useState } from "react";
import { API_KEY_COMMENTS_API, COMMENT_REPLIES_API } from "../utils/contants";

const Comment = ({ data }) => {
  const [displayReply, setDisplayReply] = useState(true);
  const [commentReplies, setCommentReplies] = useState([]);
  const { snippet, replies } = data;
  const { topLevelComment } = snippet;

  function toggleAccordion() {
    setDisplayReply(!displayReply);
  }
  const getCommentReplies = async (id) => {
    const data = await fetch(COMMENT_REPLIES_API + id + API_KEY_COMMENTS_API);
    const json = await data.json();
    setCommentReplies(json.items);
    toggleAccordion();
  };

  return (
    <>
      <div>
        <div className="flex my-6">
          <img
            className="h-10 w-10"
            alt="user"
            src={topLevelComment.snippet.authorProfileImageUrl}
          />
          <div className="ml-2">
            <p className="font-bold">
              {topLevelComment.snippet.authorDisplayName}
            </p>
            <p>{topLevelComment.snippet.textOriginal}</p>
            <p
              className="cursor-pointer w-24 bg-gray-100 border border-gray-200"
              onClick={() => getCommentReplies(topLevelComment.id)}
            >
              show-replies
            </p>
            <ul hidden={displayReply}>
              {commentReplies &&
                commentReplies.map((c) => (
                  <div className="flex my-6" key={c.id}>
                    <img
                      className="h-10 w-10"
                      alt="user"
                      src={c.snippet.authorProfileImageUrl}
                    />
                    <div className="ml-2">
                      <p className="font-bold">{c.snippet.authorDisplayName}</p>
                      <p>{c.snippet.textOriginal}</p>
                    </div>
                  </div>
                ))}
              <li
                className="cursor-pointer w-14 px-2 bg-gray-100 border border-gray-200"
                onClick={() => toggleAccordion()}
              >
                close
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;

// <ul>
//   <li
//     className="cursor-pointer"
//     onClick={() => getCommentReplies(topLevelComment.id)}
//   >
//     <span>show reply</span>
//     <ul>
//       <li className="flex flex-column">
//         {commentReplies.map((c) => c.snippet.textOriginal)}
//       </li>
//     </ul>
//   </li>
// </ul>;

{
  /* <div className="flex my-6">
          <img
            className="h-10 w-10"
            alt="user"
            src={topLevelComment.snippet.authorProfileImageUrl}
          />
          <div className="ml-2">
            <p className="font-bold">
              {topLevelComment.snippet.authorDisplayName}
            </p>
            <p>{topLevelComment.snippet.textOriginal}</p>
          </div>
</div> */
}

import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ButtonList = () => {
  const buttonItems = [
    "All",
    "Sports",
    "Cricket",
    "Games",
    "Comedy",
    "Music",
    "AI",
    "Fun",
    "Live",
    "News",
    "Trending",
    "Cooking",
  ];

  return (
    <div className="flex">
      {buttonItems.map((i, index) => (
        <Link key={index} to={"results?search_query=" + i}>
          <Button i={i} key={index} />
        </Link>
      ))}
    </div>
  );
};

export default ButtonList;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="shadow-lg w-60">
      <ul className="">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <hr></hr>
      <ul>
        <li>Library</li>
        <li>History</li>
        <li>Your videos</li>
        <li>Watch later</li>
      </ul>
    </div>
  );
};
export default SideBar;

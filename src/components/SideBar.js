import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="w-1/6 flex flex-col items-center mx-auto">
      <ul className="mt-28">
        <li className="m-2 py-1 px-5 bg-gray-100 border border-gray-200 rounded-lg">
          <Link to="/">Home</Link>
        </li>
        <li className="m-2 py-1 px-5 bg-gray-100 border border-gray-200 rounded-lg">
          Short
        </li>
        <li className="m-2 py-1 px-5 bg-gray-100 border border-gray-200 rounded-lg">
          Subscription
        </li>
      </ul>
      <ul className="-ml-3">
        <li className="m-2 py-1 px-5 bg-gray-100 border border-gray-200 rounded-lg">
          Library
        </li>
        <li className="m-2 py-1 px-5 bg-gray-100 border border-gray-200 rounded-lg">
          Histor
        </li>
        <li className="m-2 py-1 px-5 bg-gray-100 border border-gray-200 rounded-lg">
          Your video
        </li>
        <li className="m-2 py-1 px-5 bg-gray-100 border border-gray-200 rounded-lg">
          Watch later
        </li>
      </ul>
    </div>
  );
};
export default SideBar;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import menuIcon from "../assets/menu-icon.png";
import logo from "../assets/logo.png";
import userIcon from "../assets/user-icon.png";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { cacheResults } from "../utils/SearchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [querySuggestion, setQuerySuggestion] = useState([]);
  const [displaySuggestion, setDisplaySuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();
  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  // search debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setQuerySuggestion(searchCache[searchQuery]);
      } else {
        getSearchReccomendations();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // API call
  const getSearchReccomendations = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setQuerySuggestion(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="flex items-center h-16 shadow-lg">
      <div className="flex items-center justify-start basis-1/4">
        <img
          className="h-8 ml-5 cursor-pointer"
          onClick={() => handleMenuClick()}
          alt="menu"
          src={menuIcon}
        />
        <img className="h-10 ml-4" alt="logo" src={logo} />
      </div>

      <div className="flex basis-1/2">
        <div>
          <input
            className="w-3/4 border border-gray-400 rounded-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setDisplaySuggestion(true)}
            onBlur={() => setDisplaySuggestion(false)}
          />
          <button className="p-2">🔍</button>
        </div>
        {displaySuggestion && (
          <div className="bg-white p-2 shadow-sm fixed mt-10">
            <ul>
              {querySuggestion.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex basis-1/4 justify-end">
        <img className="h-8 mr-9" alt="user" src={userIcon} />
      </div>
    </div>
  );
};

export default Head;

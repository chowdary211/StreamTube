import React from "react";

const Button = ({ i }) => {
  return (
    <div className="border border-gray-200 rounded-lg mr-6 px-5 bg-gray-100">
      <h2>{i}</h2>
    </div>
  );
};

export default Button;

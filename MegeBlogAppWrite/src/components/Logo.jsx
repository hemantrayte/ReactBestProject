import React from "react";

function Logo({ text = "Hemant Rayte", size = "text-2xl", className = "" }) {
  return (
    <h1
      className={`${size} font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide ${className}`}
    >
      {text}
    </h1>
  );
}

export default Logo;

import React from "react";

const Link = ({ page }) => {
  return (
    <a
      className="normal"
      href={page}
      onMouseEnter={() => console.log("Mouse enter")}
      onMouseLeave={() => console.log("Mouse leave")}
    >
      My Domain
    </a>
  );
};

export default Link;

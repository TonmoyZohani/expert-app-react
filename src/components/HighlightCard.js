import React from "react";
import highlight1 from "../images/section/highlight1.png";

const HighlightCard = () => {
  return (
    <div className="highlight__image">
      <img src={highlight1} alt="image" />
      <div className="highlight__content">
        <p>Jenny</p>
        <span>14.2k Likes</span>
      </div>
    </div>
  );
};

export default HighlightCard;

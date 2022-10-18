import React from "react";
import arrow from "../images/icon/arrow.svg";

const Feedback = () => {
  return (
    <div className="fed__btn">
      <a href="#">
        Get Feedback <img className="ms-2" src={arrow} alt="image" />
      </a>
    </div>
  );
};

export default Feedback;

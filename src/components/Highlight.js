import React from "react";
import "../css/style.css";
import HighlightCard from "./HighlightCard";
import Footer from "./Footer";

const Highlight = () => {
  return (
    <div className="highlight__section">
      <div className="container">
        <div className="highlight__inner d-flex justify-content-between">
          <HighlightCard />
          <HighlightCard />
          <HighlightCard />
          <HighlightCard />
          <HighlightCard />
          <HighlightCard />
          <HighlightCard />
          <HighlightCard />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Highlight;

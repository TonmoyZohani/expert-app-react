import React from "react";
import "../css/style.css";

const Accordion = ({ text, id }) => {
  if (id == 1) {
    return (
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            {text}
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit, sed do eiusmod.
          </div>
        </div>
      </div>
    );
  } else if (id == 2) {
    return (
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            {text}
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit, sed do eiusmod.
          </div>
        </div>
      </div>
    );
  } else if (id == 3) {
    return (
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            {text}
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit, sed do eiusmod.
          </div>
        </div>
      </div>
    );
  } else if (id == 4) {
    return (
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingfour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapsefour"
            aria-expanded="false"
            aria-controls="flush-collapsefour"
          >
            {text}
          </button>
        </h2>
        <div
          id="flush-collapsefour"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingfour"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit, sed do eiusmod.
          </div>
        </div>
      </div>
    );
  }
};

export default Accordion;

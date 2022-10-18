import React from "react";
import AccordionList from "./AccordionList";
import Accordion from "./Accordion";
import Contents from "./Contents";
import Feedback from "./Feedback";
import expert3 from "../images/section/expert3.png";
import expert1 from "../images/section/expert1.png";

const Expert = () => {
  return (
    <div className="expert__section">
      <div className="container">
        <div className="expert__inner">
          <div className="row gx-md-5">
            <div className="col-md-4">
              <div className="expert__image">
                <img src={expert3} alt="image" />
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
            <div className="col-md-8">
              <div className="experts">
                <div className="expert__header">
                  <div className="exp__img">
                    <img src={expert1} alt="image" />
                    <img
                      src="assets/images/section/button_play.png"
                      alt="image"
                    />
                  </div>
                  <div className="expert__content">
                    <h4>JAY PARK</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod, Lorem ipsum dolor sit amet, consectetur a,
                      sed do eiusmod, Lorem ipsum dolor{" "}
                    </p>
                  </div>
                </div>
                <h2>SONGHEE HYUN'S MUSIC CLASS</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod, consectetur adipisicing elit, sed do eiusmod
                </p>
                <Contents />
                <Feedback />
              </div>

              <div className="accordion">
                <AccordionList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;

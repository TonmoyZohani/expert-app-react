import React from "react";
import Accordion from "./Accordion";

const AccordionList = () => {
  return (
    <div className="accordion__inner expert__accordion">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <Accordion text={"about me"} id={1} />
        <Accordion text={"SUBMISSION GIODLINES"} id={2} />
        <Accordion text={"PAYMENTS"} id={3} />
        <Accordion text={"SERVICE POLICY"} id={4} />
      </div>
    </div>
  );
};

export default AccordionList;

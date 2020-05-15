import React from "react";
import ServFirstRow from "./ServFirstRow";
import ServSecondRow from "./ServSecondRow";
import ServThirdRow from "./ServThirdRow";

const Services = () => {
  return (
    <div id="services-container">
      <h1 id='service-header'>Services</h1>
      <ServFirstRow />
      <ServSecondRow />
      <ServThirdRow />
    </div>
  );
};

export default Services;

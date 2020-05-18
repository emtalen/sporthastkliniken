import React from "react";
import ServFirstRow from "./ServFirstRow";
import ServSecondRow from "./ServSecondRow";
import ServThirdRow from "./ServThirdRow";
import ServForthRow from "./ServForthRow";

const Services = () => {
  return (
    <div id="services-container">
      <h1 id='service-header'>Tjänster</h1>
      <ServFirstRow />
      <ServSecondRow />
      <ServThirdRow />
      <ServForthRow/>
    </div>
  );
};

export default Services;

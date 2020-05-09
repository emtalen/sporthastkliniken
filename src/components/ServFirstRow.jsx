import React, { useState } from "react";

const ServFirstRow = () => {
    const [serviceOne, setServiceOne] = useState(false);
    const [serviceTwo, setServiceTwo] = useState(false);
    const [serviceThree, setServiceThree] = useState(false);
  return (
    <>
      <div id="first-row">
        <div
          className="service"
          onMouseEnter={() => setServiceOne(true)}
          onMouseLeave={() => setServiceOne(false)}
        ></div>
        <div
          className="service"
          onMouseEnter={() => setServiceTwo(true)}
          onMouseLeave={() => setServiceTwo(false)}
        ></div>
        <div
          className="service"
          onMouseEnter={() => setServiceThree(true)}
          onMouseLeave={() => setServiceThree(false)}
        ></div>
      </div>
      {serviceOne && (
        <div className="service-info">
          Here is some content that hopefully shows if you hover the first one
        </div>
      )}
      {serviceTwo && (
        <div className="service-info">
          Here is some content that hopefully shows if you hover the second one
        </div>
      )}
      {serviceThree && (
        <div className="service-info">
          Here is some content that hopefully shows if you hover the third one
        </div>
      )}
    </>
  );
}

export default ServFirstRow

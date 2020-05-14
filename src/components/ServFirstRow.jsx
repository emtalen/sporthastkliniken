import React, { useState } from "react";

const ServFirstRow = () => {
    const [serviceOne, setServiceOne] = useState(false);
    const [serviceTwo, setServiceTwo] = useState(false);
    const [serviceThree, setServiceThree] = useState(false);
    const [serviceFour, setServiceFour] = useState(false);
  return (
    <div id="row-container">
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
        <div
          className="service"
          onMouseEnter={() => setServiceFour(true)}
          onMouseLeave={() => setServiceFour(false)}
        ></div>
      </div>
      {serviceOne && (
        <div className="service-info">
          <p>
            Here is some content that hopefully shows if you hover the first
            one, Here is some content that hopefully shows if you hover the
            first one ,Here is some content that hopefully shows if you hover
            the first one ,Here is some content that hopefully shows if you
            hover the first one ,Here is some content that hopefully shows if
            you hover the first one ,Here is some content that hopefully shows
            if you hover the first one ,Here is some content that hopefully
            shows if you hover the first one
          </p>
        </div>
      )}
      {serviceTwo && (
        <div className="service-info">
          <p>
            Here is some content that hopefully shows if you hover the second
            one
          </p>
        </div>
      )}
      {serviceThree && (
        <div className="service-info">
          <p>
            Here is some content that hopefully shows if you hover the third one
          </p>
        </div>
      )}
      {serviceFour && (
        <div className="service-info">
          <p>
            Here is some content that hopefully shows if you hover the third one
          </p>
        </div>
      )}
    </div>
  );
}

export default ServFirstRow

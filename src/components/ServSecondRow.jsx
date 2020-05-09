import React, {useState} from 'react'

const ServSecondRow = () => {
  const [serviceFour, setServiceFour] = useState(false)
  const [serviceFive, setServiceFive] = useState(false);
  const [serviceSix, setServiceSix] = useState(false);
  return (
    <>
      <div id="second-row">
        <div
          className="service"
          onMouseEnter={() => setServiceFour(true)}
          onMouseLeave={() => setServiceFour(false)}
        ></div>
        <div
          className="service"
          onMouseEnter={() => setServiceFive(true)}
          onMouseLeave={() => setServiceFive(false)}
        ></div>
        <div
          className="service"
          onMouseEnter={() => setServiceSix(true)}
          onMouseLeave={() => setServiceSix(false)}
        ></div>
      </div>
      {serviceFour && (
        <div className="service-info">
          Here is some content that hopefully shows if you hover the forth one
        </div>
      )}
      {serviceFive && (
        <div className="service-info">
          Here is some content that hopefully shows if you hover the fifth one
        </div>
      )}
      {serviceSix && (
        <div className="service-info">
          Here is some content that hopefully shows if you hover the sixth one
        </div>
      )}
    </>
  );
}

export default ServSecondRow

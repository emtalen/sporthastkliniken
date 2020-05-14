import React, {useState} from 'react'

const ServSecondRow = () => {
  
  const [serviceFive, setServiceFive] = useState(false);
  const [serviceSix, setServiceSix] = useState(false);
  const [serviceSeven, setServiceSeven] = useState(false);
  const [serviceEight, setServiceEight] = useState(false);
  return (
    <div>
      <div id="second-row">
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
        <div
          className="service"
          onMouseEnter={() => setServiceSeven(true)}
          onMouseLeave={() => setServiceSeven(false)}
        ></div>
        <div
          className="service"
          onMouseEnter={() => setServiceEight(true)}
          onMouseLeave={() => setServiceEight(false)}
        ></div>
      </div>

      {serviceFive && (
        <div className="service-info">
         <p>Here is some content that hopefully shows if you hover the fifth one</p> 
        </div>
      )}
      {serviceSix && (
        <div className="service-info">
         <p>Here is some content that hopefully shows if you hover the sixth one</p> 
        </div>
      )}
      {serviceSeven && (
        <div className="service-info">
         <p>Here is some content that hopefully shows if you hover the forth one</p> 
        </div>
      )}
      {serviceEight && (
        <div className="service-info">
          <p>Here is some content that hopefully shows if you hover the forth one</p> 
        </div>
      )}
    </div>
  );
}

export default ServSecondRow

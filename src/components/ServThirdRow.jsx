import React, {useState} from 'react'

const ServThirdRow = () => {
    
  const [serviceNine, setServiceNine] = useState(false);
  const [serviceTen, setServiceTen] = useState(false);
  const [serviceEleven, setServiceEleven] = useState(false);
  const [serviceTwelve, setServiceTwelve] = useState(false);
  return (
    <div id='row-container'>
      <div id="third-row">
        <div
          className="service"
          onMouseEnter={() => setServiceNine(true)}
          onMouseLeave={() => setServiceNine(false)}
        ></div>
        <div
          className="service"
          onMouseEnter={() => setServiceTen(true)}
          onMouseLeave={() => setServiceTen(false)}
        ></div>
        <div
          className="service"
          onMouseEnter={() => setServiceEleven(true)}
          onMouseLeave={() => setServiceEleven(false)}
        ></div>
        <div
          className="service"
          onMouseEnter={() => setServiceTwelve(true)}
          onMouseLeave={() => setServiceTwelve(false)}
        ></div>
      </div>

      {serviceNine && (
        <div className="service-info">
         <p>Here is some content that hopefully shows if you hover the sixth one</p> 
        </div>
      )}
      {serviceTen && (
        <div className="service-info">
         <p>Here is some content that hopefully shows if you hover the forth one</p> 
        </div>
      )}
      {serviceEleven && (
        <div className="service-info">
         <p>Here is some content that hopefully shows if you hover the fifth one</p> 
        </div>
      )}
      {serviceTwelve && (
        <div className="service-info">
         <p>Here is some content that hopefully shows if you hover the fifth one</p> 
        </div>
      )}
    </div>
  );
}

export default ServThirdRow

import React, {useState} from 'react'

const ServThirdRow = () => {
    const [serviceSeven, setServiceSeven] = useState(false)
  const [serviceEight, setServiceEight] = useState(false);
  const [serviceNine, setServiceNine] = useState(false);
  return (
    <>
      <div id="third-row">
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
        <div
          className="service"
          onMouseEnter={() => setServiceNine(true)}
          onMouseLeave={() => setServiceNine(false)}
        ></div>
      </div>
      {serviceSeven && (
        <div className="service-info">
          Here is some content that hopefully shows if you hover the forth one
        </div>
      )}
      {serviceEight && (
        <div className="service-info">
          Here is some content that hopefully shows if you hover the fifth one
        </div>
      )}
      {serviceNine && (
        <div className="service-info">
          Here is some content that hopefully shows if you hover the sixth one
        </div>
      )}
    </>
  )
}

export default ServThirdRow

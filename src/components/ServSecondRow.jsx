import React, { useState } from "react";

const ServSecondRow = () => {
  const [serviceFour, setServiceFour] = useState(false);

  const [serviceFive, setServiceFive] = useState(false);
  const [serviceSix, setServiceSix] = useState(false);
  return (
    <div>
      <div className="service-row">
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/4_regen.jpg")' }}
          onMouseEnter={() => setServiceFour(true)}
          onMouseLeave={() => setServiceFour(false)}
        >
          <div className="service-name" id="one-line">
            <h1>Regenerativ Terapi</h1>
          </div>
        </div>
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/5_med_under.jpg")' }}
          onMouseEnter={() => setServiceFive(true)}
          onMouseLeave={() => setServiceFive(false)}
        >
          <div className="service-name" id="twolines">
            <h1>Medicinska Undersökningar</h1>
          </div>
        </div>
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/17-bw.jpg")' }}
          onMouseEnter={() => setServiceSix(true)}
          onMouseLeave={() => setServiceSix(false)}
        >
          <div className="service-name" id="one-line">
            <h1>Besiktningar</h1>
          </div>
        </div>
      </div>
      {serviceFour && (
        <div className="service-info">
          <h3>Regenerativ Terapi</h3>
          <p>
            Vi vill ligga i framkant när det gäller behandling av skador hos
            sporthästar och använder därför bland annat stamceller i behandling
            av senskador för optimal läkning. Vi har tillgång till den senaste
            tekniken när det gäller behandling av ledinflammation med så kallad
            i-RAP.
          </p>
        </div>
      )}
      {serviceFive && (
        <div className="service-info">
          <h3>Medicinska Undersökningar</h3>
          <p>
            Undersökning av medicinska problem så som hosta, nedsatt prestation,
            hudproblem, avmagring, diarre eller återkommande fång.
          </p>
        </div>
      )}
      {serviceSix && (
        <div className="service-info">
          <h3>Besiktningar</h3>
          <p>
            Laura har lång erfarenhet från att bedöma röntgenbilder med hjälp
            från sin kirurgiutbildning. Som kirurg, vet man hur vissa
            röntgenologiska förändringar ser ut när man inspekterar ledytor med
            en titthålskamera och därför har Laura lättare att göra vissa
            riskbedömningar i samband med besiktningen. Med den utrustning som
            vi har går det att göra en hel besiktning inklusive hals- och
            ryggröntgen. Om ni önskar kan vi även undersöka luftvägarna med en
            endoskopisk kamera samt göra en munhåleundersökning i samband med
            besiktningen.
          </p>
        </div>
      )}
    </div>
  );
};

export default ServSecondRow;

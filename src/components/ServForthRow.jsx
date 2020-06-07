import React, { useState } from "react";

const ServForthRow = () => {
  const [serviceTen, setServiceTen] = useState(false);
  const [serviceEleven, setServiceEleven] = useState(false);
  const [serviceTwelve, setServiceTwelve] = useState(false);
  return (
    <div>
      <div className="service-row">
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/10_endoskopi.jpg")' }}
          onMouseEnter={() => setServiceTen(true)}
          onMouseLeave={() => setServiceTen(false)}
        >
          <div className="service-name" id="one-line">
            <h1>Endoskopi</h1>
          </div>
        </div>
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/11_tand.jpg")' }}
          onMouseEnter={() => setServiceEleven(true)}
          onMouseLeave={() => setServiceEleven(false)}
        >
          <div className="service-name" id="one-line">
            <h1>Medicinska Undersökningar</h1>
          </div>
        </div>
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/IMG_1471s.jpg")' }}
          onMouseEnter={() => setServiceTwelve(true)}
          onMouseLeave={() => setServiceTwelve(false)}
        >
          <div className="service-name" id="twolines">
            <h1>Tandvård</h1>
          </div>
        </div>
        {serviceTen && (
          <div className="service-info">
            <h3>Endoskopi</h3>
            <p>
              Med en 1.5m eller 3m lång fiberendoskop kan vi göra undersökningar
              av till exempel luftvägar, magsäck och urinvägar.
            </p>
          </div>
        )}
        {serviceEleven && (
          <div className="service-info">
            <h3>Medicinska Undersökningar</h3>
            <p>
              Undersökning av medicinska problem så som hosta, nedsatt
              prestation, hudproblem, avmagring, diarre eller återkommande fång.
              Kliniken är utrustad med båda en 1m och 3m lång gastroskop som
              möjliggör undersökning av magsäcken, urinvägar, luftvägar etc. på
              häst. Biopsier (vävnadsprov) för vissa muskelsjukdomar,
              hudförändringar, återkommande kolik görs under sedering och lokal
              bedövning.
            </p>
          </div>
        )}
        {serviceTwelve && (
          <div className="service-info">
            <h3>Tandvård</h3>
            <p>
              Vi utför det grundliga samt kirurgi inom tandvård; kontroller,
              raspning av tänder samt borttagning av vargtänder och kindtänder
              som går att operera utan narkos. Hästar men kroniska sinuit
              (bihåleinflammation) eller komplicerade tandfrakturer hänvisas
              till Husaby Hästakut i Skara där Laura kan operera dessa under
              narkos. Bokning för tandborttagning sker direkt till Husaby
              Hästklink, 0511-275 50 eller skara@husabyhastklinik.se
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServForthRow;

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
          style={{ backgroundImage: 'url("/images/14_kirurgi-min.jpg")' }}
          onMouseEnter={() => setServiceFour(true)}
          onMouseLeave={() => setServiceFour(false)}
        >
          <div className="service-name" id="one-line">
            <h1>Kirurgi</h1>
          </div>
        </div>
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/1_Sårskador-min.jpg")' }}
          onMouseEnter={() => setServiceFive(true)}
          onMouseLeave={() => setServiceFive(false)}
        >
          <div className="service-name" id="twolines">
            <h1>Sårskador</h1>
          </div>
        </div>
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/4_regen-min.jpg")' }}
          onMouseEnter={() => setServiceSix(true)}
          onMouseLeave={() => setServiceSix(false)}
        >
          <div className="service-name" id="one-line">
            <h1>Regenerativ Terapi</h1>
          </div>
        </div>
      </div>
      {serviceFour && (
        <div className="service-info">
          <h3>Kirurgi</h3>
          <p>
            Laura opererar tisdagar, jämna veckor på Husaby Hästakut i Skara.
            Vid behov åker hon som konsulterande kirurg till olika hästkliniker
            i Norden samt gör en hel del ingrepp på stående häst på
            Sporthästkliniken (sårskador, fölningsskador, ryggoperationer etc.).
            Laura har under sin 3-åriga specialistutbildning inom hästkirurgi i
            USA arbetat med världens ledande hästkirurger. Hon är den enda med
            amerikanskt diplom i hästkirurgi i Sverige och är den enda som har
            gjort bland annat ledbrosk-transplantationer på häst i Sverige. Hon
            har stor erfarenhet från bland annat titthålskirurgi,
            fraktur-operationer, korrigering av beställningar på föl och akut
            kirurgi (sårskador / kolikoperationer).
          </p>
        </div>
      )}
      {serviceFive && (
        <div className="service-info">
          <h3>Sårskador</h3>
          <p>
            Tyvärr händer det ofta att hästar gör sig illa och behöver sys. Gör
            man detta så fort som möjligt, när såret är färskt, minskar
            läkningstiden och komplikationerna väsentligt. För prognosens skull
            är det väldigt viktigt att avgöra om såret kommunicerar med en led
            eller en senskida.  Beroende på hur omfattande skadan är och om
            såret kommunicerar med en led behöver det större såret oftast sys
            under sedering och lokal bedövning eller under narkos ihop med
            spolning av den eventuellt involverade leden. Laura har lång
            erfarenhet från behandling av allvarliga sårskador och
            ledinfektioner och vi hjälper dig i bedömning och behandling i mån
            av tid. Ta gärna bild på såret när olyckan är framme och ring till
            tidsbokningen för rådgivning. Att spola såret hemma med vattenslang
            och hålla det skadade området rent är bästa första hjälpen.
          </p>
        </div>
      )}
      {serviceSix && (
        <div className="service-info">
          <h3>Regenerativ Terapi</h3>
          <p>
            Vi vill ligga i framkant när det gäller behandling av skador hos
            sporthästar och använder därför bland annat stamceller vid
            ledbroskskador. På kliniken har vi även utrustning för att kunna
            tillverka i-RAP eller PRP, som vi oftast väljer för ligamentskador.
          </p>
        </div>
      )}
    </div>
  );
};

export default ServSecondRow;

import React, { useState } from "react";

const ServForthRow = () => {
  const [serviceThirteen, setServiceThirteen] = useState(false);
  const [serviceFourteen, setServiceFourteen] = useState(false);
  const [serviceFifthteen, setServiceFifthteen] = useState(false);
  return (
    <div>
      <div id="forth-row">
        <div
          className="service"
          onMouseEnter={() => setServiceThirteen(true)}
          onMouseLeave={() => setServiceThirteen(false)}
        >
          <div className="service-name">Kirurgi</div>
        </div>
        <div
          className="service"
          onMouseEnter={() => setServiceFourteen(true)}
          onMouseLeave={() => setServiceFourteen(false)}
        >
          <div className="service-name">Rehab</div>
        </div>
        <div
          className="service"
          onMouseEnter={() => setServiceFifthteen(true)}
          onMouseLeave={() => setServiceFifthteen(false)}
        >
          <div className="service-name">Föreläsningar</div>
        </div>
      </div>

      {serviceThirteen && (
        <div className="service-info">
          <p>
            Laura opererar jämna veckor tisdagar på Husaby Hästakut i Skara. Vid
            behov åker hon som konsulterande kirurg till olika hästkliniker i
            Norden samt gör en hel del ingrepp på stående häst. Laura har under
            sin 3-åriga specialistutbildning inom hästkirurgi i USA arbetat med
            världens ledande hästkirurger. Hon är den enda med amerikanskt
            diplom i hästkirurgi i Sverige och är den enda som har gjort en
            ledbrosktransplantion på häst i Sverige. Hon har stor erfarenhet
            från bland annat titthålskirurgi, frakturoperationer och
            kolikoperationer.
          </p>
        </div>
      )}
      {serviceFourteen && (
        <div className="service-info">
          <p>
            Laura samarbetar med Equirehab Kvicksund, Hovslagare Magnus Smederöd
            samt MJ Equiphysio för Rehab. Hon gör tillsammans med hästägaren upp
            en rehabiliteringsplan och är därefter involverad i utvecklingen.
          </p>
        </div>
      )}
      {serviceFifthteen && (
        <div className="service-info">
          <p>
            Laura har varit aktivt inblandad i vidareutbildning av både
            hästveterinärer och djurägare i Sverige, Finland och USA. Hon
            sträver jämt efter bra samarbeta med hovslagare, fysioterapeuter,
            tränare etc. och föreläser gärna ihop med experter från olika
            grenar. Tveka inte att höra av er om ni har frågor eller önskar boka
            föreläsning.
          </p>
        </div>
      )}
    </div>
  );
};

export default ServForthRow;

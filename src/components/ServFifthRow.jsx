import React, {useState} from 'react'

const ServFifthRow = () => {
  const [serviceThirteen, setServiceThirteen] = useState(false);
  const [serviceFourteen, setServiceFourteen] = useState(false);
  const [serviceFifthteen, setServiceFifthteen] = useState(false);
  return (
    <div>
      <div className="service-row">
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/12_kirurgi.jpg")' }}
          onMouseEnter={() => setServiceThirteen(true)}
          onMouseLeave={() => setServiceThirteen(false)}
        >
          <div className="service-name" id="one-line">
            <h1>Kirurgi</h1>
          </div>
        </div>
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/13_rehab.jpg")' }}
          onMouseEnter={() => setServiceFourteen(true)}
          onMouseLeave={() => setServiceFourteen(false)}
        >
          <div className="service-name" id="one-line">
            <h1>Rehab</h1>
          </div>
        </div>
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/14_förel.jpg")' }}
          onMouseEnter={() => setServiceFifthteen(true)}
          onMouseLeave={() => setServiceFifthteen(false)}
        >
          <div className="service-name" id="one-line">
            <h1>Föreläsningar</h1>
          </div>
        </div>
      </div>

      {serviceThirteen && (
        <div className="service-info">
          <h3>Kirurgi</h3>
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
          <h3>Rehab</h3>
          <p>
            Laura samarbetar med Equirehab Kvicksund, Hovslagare Magnus Smederöd
            samt MJ Equiphysio för Rehab. Hon gör tillsammans med hästägaren upp
            en rehabiliteringsplan och är därefter involverad i utvecklingen.
          </p>
        </div>
      )}
      {serviceFifthteen && (
        <div className="service-info">
          <h3>Föreläsningar</h3>
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
}

export default ServFifthRow

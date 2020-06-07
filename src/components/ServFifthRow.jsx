import React, { useState } from "react";

const ServFifthRow = () => {
  const [serviceThirteen, setServiceThirteen] = useState(false);
  const [serviceFourteen, setServiceFourteen] = useState(false);
  const [serviceFifthteen, setServiceFifthteen] = useState(false);
  return (
    <div id="last-row">
      <div className="service-row">
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/12_hov.jpg")' }}
          onMouseEnter={() => setServiceThirteen(true)}
          onMouseLeave={() => setServiceThirteen(false)}
        >
          <div className="service-name" id="one-line">
            <h1>Hovslageri/Sjukbeslag</h1>
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
          style={{ backgroundImage: 'url("/images/15_forelasning.jpg")' }}
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
          <h3>Hovslageri/Sjukbeslag</h3>
          <p>
            Hovslagarmästare Magnus Smederöd ansvarar för sjukbeslag som vi
            ordinerat till våra patienter. Magnus använder ett så kallad Black
            sensorsystem för att kunna mäta landningstider och följa upp
            förändringarna i belastningstider och hovvinklar efter korrektiv
            skoning. Ett nära samarbete och dialog mellan hovslagare och
            veterinäre är nyckeln till ett lyckat resultat. Ibland vill vi, av
            medicinsk anledning, ändra något i hästens skoning. Ett samarbete
            med hästens ordinarie hovslagare är då viktigt för att kunna få ett
            långsiktigt och bra resultat.
          </p>
        </div>
      )}
      {serviceFourteen && (
        <div className="service-info">
          <h3>Rehab</h3>
          <p>
            Laura har ett nära samarbete med Equirehab i Kvicksund där hästen
            kan få fortsatt rehabilitering i form av träning på vattenrullband,
            skrittband eller tömkörning.
          </p>
        </div>
      )}
      {serviceFifthteen && (
        <div className="service-info">
          <h3>Föreläsningar</h3>
          <p>
            Laura har varit aktivt inblandad i vidareutbildning av både
            hästveterinärer och djurägare i Sverige, Finland och USA. De senaste
            två åren har hon blivit flitigt anlitat av Svenska Ridsportförbundet
            på diverse tränarutbildningar och tränarkonvent. Hon ansvarar även
            för den veterinärmedicinska utbildningen för ATG hopp och talang
            elever.
          </p>
        </div>
      )}
    </div>
  );
};

export default ServFifthRow;

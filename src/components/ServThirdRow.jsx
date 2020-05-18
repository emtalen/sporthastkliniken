import React, { useState } from "react";

const ServThirdRow = () => {
  const [serviceNine, setServiceNine] = useState(false);
  const [serviceTen, setServiceTen] = useState(false);
  const [serviceEleven, setServiceEleven] = useState(false);
  const [serviceTwelve, setServiceTwelve] = useState(false);
  return (
    <div>
      <div id="third-row">
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/9_shock.jpg")' }}
          onMouseEnter={() => setServiceNine(true)}
          onMouseLeave={() => setServiceNine(false)}
        >
          <div className="service-name" id="two-lines">
            <h1>Shockwave - Stötvågsbehandling</h1>
          </div>
        </div>
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
            <h1>Tandvård</h1>
          </div>
        </div>
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/2_hält.jpg")' }}
          onMouseEnter={() => setServiceTwelve(true)}
          onMouseLeave={() => setServiceTwelve(false)}
        >
          <div className="service-name" id="twolines">
            <h1>Hovslageri & Sjukbeslag</h1>
          </div>
        </div>
      </div>

      {serviceNine && (
        <div className="service-info">
          <p>
            Används för behandling av muskelömhet i ryggar och skador på senor,
            senskidor, gaffelband med mera. Vi har en helt ny PiezoWave
            stötvågsmaskin som möjliggör en fokuserad djupgående behandling på
            det aktuella stället. Stötvåg har direkt smärtlindrande och
            anti-inflammatorisk effekt vilket ger fantastiskt resultat på
            muskelömhet.
          </p>
        </div>
      )}
      {serviceTen && (
        <div className="service-info">
          <p>
            Med en 1.5m eller 3m lång fiberendoskop kan vi göra undersökningar
            av till exempel luftvägar, magsäck och urinvägar.
          </p>
        </div>
      )}
      {serviceEleven && (
        <div className="service-info">
          <p>
            Vi utför det grundliga inom tandvård; kontroller, raspning av tänder
            samt borttagning av lättare tandsten. Laura gör även kirurgiska
            ingrepp för borttagning av tänder på Husaby Hästklinik i Skara.
            Bokning för tandborttagning sker direkt till Husaby Hästklink,
            0511-275 50 eller skara@husabyhastkliniken.se
          </p>
        </div>
      )}
      {serviceTwelve && (
        <div className="service-info">
          <p>Laura samarbetar med Smederöds Hovslageri.</p>
        </div>
      )}
    </div>
  );
};

export default ServThirdRow;

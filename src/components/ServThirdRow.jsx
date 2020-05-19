import React, { useState } from "react";

const ServThirdRow = () => {
  const [serviceSeven, setServiceSeven] = useState(false);
  const [serviceEight, setServiceEight] = useState(false);
  const [serviceNine, setServiceNine] = useState(false);

  return (
    <div>
      <div className="service-row">
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/7_Röntgen1.jpg")' }}
          onMouseEnter={() => setServiceSeven(true)}
          onMouseLeave={() => setServiceSeven(false)}
        >
          <div className="service-name" id="one-line">
            <h1>Röntgen</h1>
          </div>
        </div>
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/8_ultraljud.jpg")' }}
          onMouseEnter={() => setServiceEight(true)}
          onMouseLeave={() => setServiceEight(false)}
        >
          <div className="service-name" id="one-line">
            <h1>Ultraljud</h1>
          </div>
        </div>
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
      </div>
      {serviceSeven && (
        <div className="service-info">
          <p>
            Röntgen används oftast för att utesluta skelettskador efter ett
            trauma, vid hältundersökningar eller besiktning. Med vårt
            röntgensystem går det även att ta bilder från halsen och
            tornutskotten på ryggen.
          </p>
        </div>
      )}
      {serviceEight && (
        <div className="service-info">
          <p>
            Ultraljud används främst vid undersökning av skador i mjukdelarna,
            senor, leder, rygg, buk, ögon mm. Det går även att undersöka
            sakroiliakled och att göra gynekologiska undersökningar.
          </p>
        </div>
      )}
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
    </div>
  );
};

export default ServThirdRow;

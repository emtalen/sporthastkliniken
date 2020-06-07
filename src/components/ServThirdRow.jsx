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
          style={{ backgroundImage: 'url("/images/7_Ront-min.jpg")' }}
          onMouseEnter={() => setServiceSeven(true)}
          onMouseLeave={() => setServiceSeven(false)}
        >
          <div className="service-name" id="one-line">
            <h1>Röntgen</h1>
          </div>
        </div>
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/8_ultraljud-min.jpg")' }}
          onMouseEnter={() => setServiceEight(true)}
          onMouseLeave={() => setServiceEight(false)}
        >
          <div className="service-name" id="one-line">
            <h1>Ultraljud</h1>
          </div>
        </div>
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/9_shock-min.jpg")' }}
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
          <h3>Röntgen</h3>
          <p>
            Röntgen används oftast för att utesluta skelettskador efter ett
            trauma, vid hältundersökningar eller besiktning. Med vårt digital
            röntgensystem går det även att ta bilder från halsen och
            tornutskotten på ryggen.
          </p>
        </div>
      )}
      {serviceEight && (
        <div className="service-info">
          <h3>Ultraljud</h3>
          <p>
            På Sporthästkliniken använder vi ultraljudsmaskin flitigt för
            undersökning av ligament-, muskel-och senskador. Ultraljud används
            även för inspektion av leder, broskytor, undersökning av bukhåla,
            ögon eller för gynekologiska undersökningar. Undersökning av
            sacroiliacled sker via ändtarmen efter att hästen fått lugnande
            medicin.
          </p>
        </div>
      )}
      {serviceNine && (
        <div className="service-info">
          <h3>Shockwave - Stötvågsbehandling</h3>
          <p>
            Shockwave används för behandling av muskelömhet i ryggar och skador
            på ligament, senor, gaffelband med mera. Vi har en helt ny PiezoWave
            stötvågsmaskin som möjliggör en fokuserad djupgående behandling på
            det aktuella stället. Stötvåg har direkt smärtlindrande och
            anti-inflammatorisk effekt vilket ger fantastiskt resultat bland
            annat på muskelömhet.
          </p>
        </div>
      )}
    </div>
  );
};

export default ServThirdRow;

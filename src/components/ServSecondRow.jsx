import React, {useState} from 'react'

const ServSecondRow = () => {
  
  const [serviceFive, setServiceFive] = useState(false);
  const [serviceSix, setServiceSix] = useState(false);
  const [serviceSeven, setServiceSeven] = useState(false);
  const [serviceEight, setServiceEight] = useState(false);
  return (
    <div>
      <div id="second-row">
        <div
          className="service"
          onMouseEnter={() => setServiceFive(true)}
          onMouseLeave={() => setServiceFive(false)}
        >
          <div className="service-name">Medicinska Undersökningar</div>
        </div>
        <div
          className="service"
          onMouseEnter={() => setServiceSix(true)}
          onMouseLeave={() => setServiceSix(false)}
        >
          <div className="service-name"> Besiktningar</div>
        </div>
        <div
          className="service"
          onMouseEnter={() => setServiceSeven(true)}
          onMouseLeave={() => setServiceSeven(false)}
        >
          <div className="service-name">Röntgen</div>
        </div>
        <div
          className="service"
          onMouseEnter={() => setServiceEight(true)}
          onMouseLeave={() => setServiceEight(false)}
        >
          <div className="service-name">Ultraljud</div>
          
        </div>
      </div>

      {serviceFive && (
        <div className="service-info">
          <p>
            Undersökning av medicinska problem så som hosta, nedsatt prestation,
            hudproblem, avmagring, diarre eller återkommande fång.
          </p>
        </div>
      )}
      {serviceSix && (
        <div className="service-info">
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
    </div>
  );
}

export default ServSecondRow

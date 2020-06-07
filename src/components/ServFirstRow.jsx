import React, { useState } from "react";

const ServFirstRow = () => {
  const [serviceOne, setServiceOne] = useState(false);
  const [serviceTwo, setServiceTwo] = useState(false);
  const [serviceThree, setServiceThree] = useState(false);
  return (
    <div id="row-container">
      <div className="service-row">
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/2_hält-min.jpg")' }}
          onMouseEnter={() => setServiceOne(true)}
          onMouseLeave={() => setServiceOne(false)}
        >
          <div className="service-name" id="one-line">
            <h1>Hältutredningar</h1>
          </div>
        </div>
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/6_Besiktningar2-min.jpg")' }}
          onMouseEnter={() => setServiceTwo(true)}
          onMouseLeave={() => setServiceTwo(false)}
        >
          <div className="service-name" id="one-line">
            <h1>Besiktningar</h1>
          </div>
        </div>
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/4_rygg_2 small-min.jpg")' }}
          onMouseEnter={() => setServiceThree(true)}
          onMouseLeave={() => setServiceThree(false)}
        >
          <div className="service-name" id="one-line">
            <h1>Ryggutredningar</h1>
          </div>
        </div>
      </div>
      {serviceOne && (
        <div className="service-info">
          <h3>Hältutredningar</h3>
          <p>
            Hälta är en vanlig åkomma hos våra hästar. Akuta kraftiga hältor
            orsakas oftast av en traumatisk händelse till skillnad från
            lindrigare kroniska hältor där problemet kan vara slitage i lederna,
            smärta i ligament eller muskler. Oavsett orsak har vi lång
            erfarenhet av olika typer av hältor. Med användning av ett objektivt
            rörelsemätningssystem, Lameness Locator, så visas rörelsestörningar
            som kan vara svåra att upptäcka med blotta ögat. Det är ett perfekt
            verktyg att använda vid vet.check av återkommande sporthästar under
            tävlingssäsongen. Vi lägger stort fokus på ryttaren och vill gärna
            se alla hästar (med kroniska problem) under sadel. Vid behov sitter
            Laura upp själv.
          </p>
        </div>
      )}
      {serviceTwo && (
        <div className="service-info">
          <h3>Besiktningar</h3>
          <p>
            Inför försäljning eller försäkring görs en undersökning av hästen
            som kallas besiktning. Självaste besiktningssituationen kan många
            gånger vara ganska nervöst och laddat, både för köparen och
            säljaren. Besiktningen börjar med den ortopediska utvärderingen där
            vi vill se om hästen är sund i sina rörelser. Vi använder ofta ett
            så kallat Lameness Locator sensor system för en objektiv analys.
            Hästen undersöks på hårt underlag på rakt spår samt vid longering på
            fastare och mjukare underlag. Vi bedömer samtidigt hästens
            koordination, balans och lyssnar till missljud från luftvägarna i
            samband med arbetet. Därefter går man igenom hästens palpatorisk
            (senor, leder, muskulatur etc), man lyssnar till hjärta, lungor och
            mag-tarmkanalen och sedan kollas mun och ögon. Om hästen blir
            godkänd på den kliniska undersökningen beslutas det, enligt köparens
            önskemål om vidareundersökningar så som röntgen, ultraljud och
            endoskopi av luftvägar ska utföras.
          </p>
        </div>
      )}
      {serviceThree && (
        <div className="service-info">
          <h3>Ryggutredningar</h3>
          <p>
            Ryggsmärta kan bero på förändringar i skelettet, muskler eller
            ligament och många gånget är det en kombination av alla tre. Har
            hästen ont i ryggen är det viktigt att utesluta allvarliga skelett-
            och mjukdelsförändringar samt kolla igenom utrustning och
            träningsrutiner. Ett individuellt rehabiliteringsprogram anpassat
            till hästen och ryttaren är nyckeln till framgång.
          </p>
        </div>
      )}
    </div>
  );
};

export default ServFirstRow;

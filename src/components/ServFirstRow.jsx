import React, { useState } from "react";

const ServFirstRow = () => {
    const [serviceOne, setServiceOne] = useState(false);
    const [serviceTwo, setServiceTwo] = useState(false);
    const [serviceThree, setServiceThree] = useState(false);
    const [serviceFour, setServiceFour] = useState(false);
  return (
    <div id="row-container">
      <div id="first-row">
        <div
          className="service"
          onMouseEnter={() => setServiceOne(true)}
          onMouseLeave={() => setServiceOne(false)}
        >
          <div className="service-name">Sårskador</div>{" "}
        </div>
        <div
          className="service"
          onMouseEnter={() => setServiceTwo(true)}
          onMouseLeave={() => setServiceTwo(false)}
        >
          <div className="service-name">Hältutredningar</div>{" "}
        </div>
        <div
          className="service"
          onMouseEnter={() => setServiceThree(true)}
          onMouseLeave={() => setServiceThree(false)}
        >
          <div className="service-name">Ryggutredningar</div>
        </div>
        <div
          className="service"
          onMouseEnter={() => setServiceFour(true)}
          onMouseLeave={() => setServiceFour(false)}
        >
          <div className="service-name">Regenerativ Terapi</div>
        </div>
      </div>
      {serviceOne && (
        <div className="service-info">
          <p>
            Laura har en otrolig erfarenhet gällande alla typer av sårskador. Om
            olyckan skulle vara framme så har vi möjlighet att hjälpa till, även
            med akuta fall - i mån av tid.
          </p>
        </div>
      )}
      {serviceTwo && (
        <div className="service-info">
          <p>
            Hälta är en vanlig åkomma hos våra hästar. Akuta kraftiga hältor är
            oftast orsakade av en traumatisk händelse i motsats till lindrigare
            kroniska hältor där problemet kan vara slitage i lederna, smärta i
            ligamenten eller muskler. Oavsett orsak har vi lång erfarenhet av
            olika typer av hältor. Med användning av ett objektivt
            rörelsemätningssystem, Lameness Locator, så visas rörelsestörningar
            som kan vara svåra att upptäcka med blotta ögat. Ett perfekt verktyg
            att använda vid vet.check av återkommande sporthästar under
            tävlingssäsongen. Vi lägger stor fokus på ryttaren och vill gärna se
            alla hästar (med kroniska problem) under sadel. Vid behov sitter
            Laura upp själv.
          </p>
        </div>
      )}
      {serviceThree && (
        <div className="service-info">
          <p>
            Ryggsmärta kan bero på förändringar i skelettet, muskler eller
            ligament och inte sällan är det en kombination av alla tre. Har
            hästen ont i ryggen är det viktigt att utesluta allvarliga skelett-
            och mjukdelsförändringar samt kolla genom utrustning och
            träningsrutiner. Individuellt rehabiliteringsprogram anpassat till
            hästen och ryttaren är nyckel till framgång.
          </p>
        </div>
      )}
      {serviceFour && (
        <div className="service-info">
          <p>
            Vi vill ligga i framkant när det gäller behandling av skador hos
            sporthästar och använder därför bland annat stamceller i behandling
            av senskador för optimal läkning. Vi har tillgång till den senaste
            tekniken när det gäller behandling av ledinflammation med så kallad
            i-RAP.
          </p>
        </div>
      )}
    </div>
  );
}

export default ServFirstRow

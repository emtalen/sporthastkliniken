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
          style={{ backgroundImage: 'url("/images/1_Sårskador.jpg")' }}
          onMouseEnter={() => setServiceOne(true)}
          onMouseLeave={() => setServiceOne(false)}
        >
          <div className="service-name" id="one-line">
            <h1>Sårskador</h1>
          </div>
        </div>
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/2_hält.jpg")' }}
          onMouseEnter={() => setServiceTwo(true)}
          onMouseLeave={() => setServiceTwo(false)}
        >
          <div className="service-name" id="one-line">
            <h1>Hältutredningar</h1>
          </div>
        </div>
        <div
          className="service"
          style={{ backgroundImage: 'url("/images/4_rygg_2_small.jpg")' }}
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
          <h3>Sårskador</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      )}
      {serviceTwo && (
        <div className="service-info">
          <h3>Hältutredningar</h3>
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
          <h3>Ryggutredningar</h3>
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
    </div>
  );
};

export default ServFirstRow;

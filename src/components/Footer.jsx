import React from "react";
import { Icon } from "semantic-ui-react";

const Footer = () => {
  return (
    <div id="footer">
      <h1>Kontakt</h1>
      {/* <div id="info-container"> */}
      <div className="footer-info">
        <Icon name="map marker alternate" />
        <p>
          Häljeby 4<br />
          731 92 Köping
          <br />
          Sverige
        </p>
      </div>
      <div className="footer-info">
        <Icon name="phone" />
        <p>
          BOKNING VIA TELEFON:
          <br />
          +46 07 378 41 10
          <p style={{ fontStyle: "italic" }}>
            Om vi är upptagna, skicka ett SMS så ringer vi upp.
          </p>
        </p>
      </div>
      <div className="footer-info" id="mail">
        <Icon name="envelope outline" />
        <p>
          info@sporthastkliniken.se
          <p style={{ fontStyle: "italic" }}>
            {" "}
            OBS! Vi tar inte emot bokningar via mail.
            <br />
          <p id='hack'>-</p>
          </p>
        </p>
      </div>
    </div>
    // </div>
  );
};

export default Footer;

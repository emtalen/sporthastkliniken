import React from "react";
import { Icon } from "semantic-ui-react";

const Footer = () => {
  return (
    <div id="footer">
      <h1>Kontakt</h1>
      <div className="footer-info">
        <a
          href="https://www.instagram.com/sporthastkliniken/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "lightGrey" }}
        >
          <Icon name="instagram" size="large" />
          <p>@sporthastkliniken</p>
        </a>
      </div>
      <div className="footer-info">
        <a
          href="https://www.facebook.com/sporthastkliniken/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "lightGrey" }}
        >
          <Icon name="facebook square" size="large" />
          <p>Sporthästkliniken Häljeby AB</p>
        </a>
      </div>
      <div className="footer-info">
        <Icon name="phone" size="large" />
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
        <a
          href="mailto: info@sporthastkliniken.se"
          style={{ color: "lightGrey" }}
        >
          <Icon name="envelope outline" size="large" />
          <p>
            info@sporthastkliniken.se
            <p style={{ fontStyle: "italic" }}>
              OBS! Vi tar inte emot bokningar via mail.
            </p>
          </p>
        </a>
      </div>
      <div className="footer-info">
        <a
          href="https://www.google.se/maps/place/H%C3%A4ljeby+4,+731+92+K%C3%B6ping/@59.5688253,16.094828,17z/data=!3m1!4b1!4m5!3m4!1s0x465e809358575467:0x1a11b03c5e089e2d!8m2!3d59.5688226!4d16.097022"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "lightGrey" }}
        >
          <Icon name="map marker alternate" size="large" />
          <p>
            Häljeby 4<br />
            731 92 Köping
            <br />
            Sverige
          </p>
        </a>
      </div>
    </div>
  );
};

export default Footer;

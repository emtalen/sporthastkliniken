import React from "react";
import { Icon } from "semantic-ui-react";

const Footer = () => {
  return (
    <div id="footer">
      <h1>Kontakt</h1>
      <div id="info-container">
        <div id="address">
          <Icon name="map marker alternate" />
          <p>
            Häljeby 4<br />
            731 92 Köping
            <br />
            Sverige
          </p>
        </div>
        <div id="phone">
          <Icon name="phone" />
          <p>
            +46 07 378 41 10
            <br />
            Telefontid Vardagar:
            <br />
            07:00-09:00
            <br />
            Övriga tider, skicka meddelande så ringer vi upp
          </p>
        </div>
        <div id="time">
          <Icon name="clock outline" />
          <p>
            Måndag-Fredag
            <br />
            08:00-16:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

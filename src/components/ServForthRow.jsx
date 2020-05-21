import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ServForthRow = () => {
  const [serviceTen, setServiceTen] = useState(false);
  const [serviceEleven, setServiceEleven] = useState(false);
  const [serviceTwelve, setServiceTwelve] = useState(false);
  return (
    <div>
      <div className="service-row">
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
          style={{ backgroundImage: 'url("/images/IMG_1471s.jpg")' }}
          onMouseEnter={() => setServiceTwelve(true)}
          onMouseLeave={() => setServiceTwelve(false)}
        >
          <div className="service-name" id="twolines">
            <h1>
              Hovslageri
              <br /> & Sjukbeslag
            </h1>
          </div>
        </div>
        {serviceTen && (
          <div className="service-info">
            <h3>Endoskopi</h3>
            <p>
              Med en 1.5m eller 3m lång fiberendoskop kan vi göra undersökningar
              av till exempel luftvägar, magsäck och urinvägar.
            </p>
          </div>
        )}
        {serviceEleven && (
          <div className="service-info">
            <h3>Tandvård</h3>
            <p>
              Vi utför det grundliga inom tandvård; kontroller, raspning av
              tänder och borttagning av vargtänder . Laura gör även kirurgiska
              ingrepp för borttagning av tänder på Husaby Hästklinik i Skara.
              Bokning för tandborttagning sker direkt till Husaby Hästklink
              0511-275 50 eller skara@husabyhastkliniken.se
            </p>
          </div>
        )}
        {serviceTwelve && (
          <div className="service-info">
            <h3>Hovslageri & Sjukbeslag</h3>
            <p>Laura samarbetar med Smederöds Hovslageri.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServForthRow;

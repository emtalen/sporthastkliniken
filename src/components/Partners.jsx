import React from "react";

const Partners = () => {
  return (
    <div id="partners">
      <h1 id="partner-header">Partners</h1>
      <div className="partner-row">
        <a
          href="https://www.facebook.com/pages/category/Company/Smeder%C3%B6ds-Hovslageri-AB-1506112216341560/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/smederods.png"
            alt="Smederöds Hovslageri"
            id="first-partner"
          />
        </a>
        <a href="http://ttms.se/" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/ttms.png"
            alt="Trädgårdsteknik"
            id="second-partner"
          />
        </a>
      </div>
      <div className="partner-row">
        <a
          href="http://www.gconstruct.se/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/g_logga.png" alt="G Construct" id="third-partner" />
        </a>
        <a
          href="https://www.stromsholmssadelmakeri.se/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/strömsholmlogga.png"
            alt="Strömsholms Sadelmakeri"
            id="forth-partner"
          />
        </a>
      </div>
      <div className="partner-row">
        <a
          href="http://www.husabyhastklinik.se/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/Logo_HusabyHakut_liggande_beige_rgb_72dpi.jpg"
            alt="G Construct"
            id="fifth-partner"
          />
        </a>
      </div>
    </div>
  );
};

export default Partners;

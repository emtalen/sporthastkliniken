import React from "react";

const Partners = () => {
  return (
    <div id="partners">
      <h1 id='partner-header'>Partners</h1>
      <div className="partner-row">
        <a
          href="https://www.facebook.com/pages/category/Company/Smeder%C3%B6ds-Hovslageri-AB-1506112216341560/"
          target="_blank"
        >
          <img
            src="/images/smederods.png"
            alt="Smederöds Hovslageri"
            id="first-partner"
          />
        </a>
        <a href="http://ttms.se/" target="_blank">
          <img
            src="/images/ttms.png"
            alt="Trädgårdsteknik"
            id="second-partner"
          />
        </a>
      </div>
      <div className="partner-row">
        <a href="http://www.gconstruct.se/" target="_blank">
          <img src="/images/g_logga.png" alt="G Construct" id="third-partner" />
        </a>
        <a href="https://www.stromsholmssadelmakeri.se/" target="_blank">
          <img
            src="/images/2019_Logosköld+text+Din_Ridsportsbutik(1).png"
            alt="Strömsholms Sadelmakeri"
            id="forth-partner"
          />
        </a>
      </div>
    </div>
  );
};

export default Partners;

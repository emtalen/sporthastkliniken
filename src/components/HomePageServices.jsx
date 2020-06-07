import React from "react";
import { NavLink } from "react-router-dom";

const HomePageServices = () => {
  return (
    <>
      <div id="service-container">
        <div id="service">
          <NavLink to="/tjänster" style={{ color: "black" }}>
            <h1>Tjänster</h1>

            <div id="listcontainer">
              <div className="list-items">
                <p>Hältutredningar</p>
                <p>Besiktningar</p>
                <p>Ryggutredningar</p>
                <p>Kirurgi</p>
                <p>Sårskador</p>
              </div>
              <div className="list-items">
                <p>Regenerativ Terapi</p>
                <p>Röntgen</p>
                <p>Ultraljud</p>
                <p>Shockwave</p>
                <p>Endoskopi</p>
              </div>
              <div className="list-items">
                <p>Medicinska Undersökningar</p>
                <p>Tandvård</p>
                <p>Hovslageri & Sjukbeslag</p>
                <p>Rehab</p>
                <p>Föreläsningar</p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
      <div id="image-goes-here"></div>
    </>
  );
};

export default HomePageServices;

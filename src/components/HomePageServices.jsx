import React from "react";
import { NavLink } from "react-router-dom";

const HomePageServices = () => {
  return (
    <>
      <div id="service-container">
        <div id="service">
          <NavLink to="/tjänster" style={{ color: "black" }}>
            <h1>Tjänster</h1>
          </NavLink>
          <div id="listcontainer">
            <div className="list-items">
              <p>Sårskador</p>
              <p>Hältutredningar</p>
              <p>Medicinska Undersökningar</p>
            </div>
            <div className="list-items">
              <p>Röntgen</p>
              <p>Kirurgi</p>
              <p>Shockwave</p>
            </div>
            <div className="list-items">
              <p>Endoskopi</p>
              <p>Tandvård</p>
              <p>Hovslageri & Sjukbeslag</p>
            </div>
            <div className="list-items">
              <p>Regenerativ Terapi</p>
              <p>Besiktningar</p>
              <p>Ultraljud</p>
            </div>
            <div className="list-items" id="last-list">
              <p>Ryggutredningar</p>
              <p>Rehab</p>
              <p>Föreläsningar</p>
            </div>
          </div>
        </div>
      </div>
      <div id="image-goes-here"></div>
    </>
  );
};

export default HomePageServices;

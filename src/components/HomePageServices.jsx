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
                <p>Sårskador</p>
                <p>Hältutredningar</p>
                <p>Medicinska Undersökningar</p>
                <p>Ryggutredningar</p>
                <p>Rehab</p>
              </div>
              <div className="list-items">
                <p>Röntgen</p>
                <p>Kirurgi</p>
                <p>Shockwave</p>
                <p>Regenerativ Terapi</p>
                <p>Ultraljud</p>
              </div>
              <div className="list-items">
                <p>Endoskopi</p>
                <p>Tandvård</p>
                <p>Hovslageri & Sjukbeslag</p>
                <p>Besiktningar</p>
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

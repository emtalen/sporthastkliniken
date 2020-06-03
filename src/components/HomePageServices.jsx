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
              <ul>
                <li>Sårskador</li>
                <li>Hältutredningar</li>
                <li>Ryggutredningar</li>
                <li>Regenerativ Terapi</li>
              </ul>
            </div>
            <div className="list-items">
              <ul>
                <li>Medicinska Undersökningar</li>
                <li>Besiktningar</li>
                <li>Röntgen</li>
                <li>Ultraljud</li>
              </ul>
            </div>

            <div className="list-items">
              <ul>
                <li>Shockwave</li>
                <li>Endoskopi</li>
                <li>Tandvård</li>
                <li>Hovslageri & Sjukbeslag</li>
              </ul>
            </div>

            <div className="list-items" id='last-list'>
              <ul>
                <li>Kirurgi</li>
                <li>Rehab</li>
                <li>Föreläsningar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="image-goes-here"></div>
    </>
  );
};

export default HomePageServices;

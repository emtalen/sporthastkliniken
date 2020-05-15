import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import useDocumentScrollThrottled from "../modules/scrollHandler";

const Header = () => {
  const [shouldFillHeader, setShouldFillHeader] = useState(false);
  const [shouldNotFillHeader, setShouldNotFillHeader] = useState(true);

  const MINIMUM_SCROLL = 50;
  const TIMEOUT_DELAY = 20;

  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;
    const isScrolledDown = currentScrollTop !== 0;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldNotFillHeader(currentScrollTop < 20);

    setTimeout(() => {
      setShouldFillHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const transparentStyle = shouldNotFillHeader ? "transparent" : "filled";
  const scrollStyle = shouldFillHeader ? "fill" : "transparent";

  const [kliniken, setKliniken] = useState(false);

  return (
    <header className={`header ${scrollStyle} ${transparentStyle}`}>
      <div id="logo">
        <NavLink to="/" style={{ color: "white" }}>
          <h1>Sporthästkliniken Häljeby AB</h1>
        </NavLink>
      </div>
      <div className="header-tab">
        <NavLink to="/kontakt" style={{ color: "white" }}>
          Kontakt
        </NavLink>
      </div>
      <div className="header-tab">
        <NavLink to="/partners" style={{ color: "white" }}>
          Partners
        </NavLink>
      </div>
      <div
        className="header-tab"
        onMouseEnter={() => setKliniken(true)}
        onMouseLeave={() => setKliniken(false)}
        style={{ color: "white" }}
        id="kliniken"
      >
        Kliniken
        {kliniken && (
          <div id="kliniken-dropdown-container">
            <div className="dropdown-tab" id="dropdown-tjänster">
              <NavLink to="/tjänster" style={{ color: "white" }}>
                Tjänster
              </NavLink>
            </div>
            <div className="dropdown-tab" id="dropdown-teamet">
              <NavLink to="/teamet" style={{ color: "white" }}>
                Teamet
              </NavLink>
            </div>
            <div className="dropdown-tab">
              <NavLink to="/galleri" style={{ color: "white" }}>
                Galleri
              </NavLink>
            </div>
          </div>
        )}
      </div>
      <div className="header-tab">
        <NavLink to="/nyheter" style={{ color: "white" }}>
          Nyheter
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

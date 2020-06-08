import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
      <NavLink to="/" style={{ color: "white" }}>
        <img src="/images/Sporthastkliniken_liggande_vit_RGB.png" alt="logo" />
      </NavLink>
      <div>
        <NavLink to="/english" className="header-tab">
          English
        </NavLink>
      </div>
      <div>
        <NavLink to="/kontakt" className="header-tab">
          Kontakt
        </NavLink>
      </div>
      <div>
        <NavLink to="/partners" className="header-tab">
          Partners
        </NavLink>
      </div>
      <div
        onMouseEnter={() => setKliniken(true)}
        onMouseLeave={() => setKliniken(false)}
        style={{ color: "white" }}
        className="header-tab"
      >
        <NavLink to="/kliniken" className="header-tab">
          Kliniken
        </NavLink>
        {kliniken && (
          <>
            <div className="dropdown-tab" id="dropdown-tjänster">
              <NavLink to="/tjänster" className="tab">
                <p>Tjänster</p>
              </NavLink>
            </div>
            <div className="dropdown-tab" id="dropdown-teamet">
              <NavLink to="/teamet" className="tab">
                <p>Teamet</p>
              </NavLink>
            </div>
            <div className="dropdown-tab">
              <NavLink to="/galleri" className="tab">
                <p>Galleri</p>
              </NavLink>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

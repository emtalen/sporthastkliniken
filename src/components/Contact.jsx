import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div id="contact-info">
        <h1>KONTAKT</h1>
        <p>
          SPORTHÄSTKLINIKEN HÄLJEBY AB <br />
          Häljeby 4, 731 92 Köping
          <br />
          info@sporthastkliniken.se
        </p>
        <div id="opening-hours">
          <p style={{fontSize: '1.4rem'}}>
            Öppettider: <br />
            <p style={{ fontStyle: "italic" }}>
              Vänligen notera att våra öppettider varierar.
            </p>
          </p>
          <div className="opening-hours-info">
            <p style={{ fontWeight: 500 }}>
              Mån, Ons, Tors, Fre:
              <p>
                Från 08:30 <p style={{ color: "lightGrey" }}> - </p>
              </p>
            </p>
          </div>
          <div id="opening-hours-info">
            <p style={{ fontWeight: 500 }}>
              Tis:
              <p>
                Jämn vecka STÄNGT (Laura opererar i Husaby, Skara)
                <br />
                Ojämn vecka från 12:00
              </p>
            </p>
          </div>
          <div className="opening-hours-info">
            <p style={{ fontWeight: 500 }}>
              Helg:
              <p>
                STÄNGT <p style={{ color: "lightGrey" }}>-</p>
              </p>
            </p>
          </div>
        </div>
        <p style={{ fontSize: "1.5rem" }}>
          BOKNING VIA TELEFON <br />
          +46 70 378 4110
        </p>
        <p style={{ fontStyle: "italic" }}>
          Om vi är upptagna, skicka ett SMS så ringer vi upp. <br />
          OBS- Vi tar inte emot bokningar på email.
        </p>
        <p>Övriga tider, skicka meddelande så ringer vi upp.</p>
        <p style={{ paddingTop: "2%", fontSize: "1.4rem" }}>
          För bokningen av operation, kontakta Husby kliniken direkt
          <p>
            Tel: 0511-275 50 <br /> Mail: skara@husabyhastkliniken.se
          </p>
        </p>
      </div>
      <div id="contact-greeting">
        <p>
          VI SES! <br />
          Team Sporthästkliniken Häljeby
        </p>
        <img src="/images/46-bw.jpg" alt="team" />
      </div>
    </div>
  );
};

export default Contact;

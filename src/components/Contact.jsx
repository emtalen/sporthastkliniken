import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
      <div id="contact-info">
        <h1>KONTAKT</h1>
        <p>
          SPORTHÄSTKLINIKEN HÄLJEBY AB <br />
          Häljeby 4, 731 92 Köping<br/>
          info@sporthastkliniken.se
        </p>
        <p>Öppettider: <br/>
        <p style={{ fontStyle: 'italic' }}>Vänligen notera att våra öppettider varierar.</p>
        <p>Mån, Ons, Tors, Fre: <br/> Från 08:30</p>
        <p>Tis: <br/>
        Jämn vecka STÄNGT (Laura opererar i Husaby, Skara)<br/>
        Ojämn vecka från 12:00</p>
        <p>Helg: STÄNGT</p>
        <p>
          BOKNING VIA TELEFON <br />
          +46 70 378 4110
        </p>
        <p style={{ fontStyle: 'italic' }}>Om vi är upptagna, skicka ett SMS så ringer vi upp. <br/>
        OBS- Vi tar inte emot bokningar på email.</p></p>
        <p>Övriga tider, skicka meddelande så ringer vi upp.</p>
      </div>
      <div id='contact-greeting'>
        <p>VI SES! <br/>
        Team Sporthästkliniken Häljeby</p>
        <img src="/images/46-bw.jpg" alt="team" />
      </div>
    </div>
  );
}

export default Contact

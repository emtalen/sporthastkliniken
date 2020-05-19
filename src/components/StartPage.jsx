import React from "react";

const StartPage = () => {
  return (
    <div id="start-page">
      {/* style=
      {{
        background: 'url("./public/images/0-bw.jpg")',
        height: "100vh",
        backgroundSize: "cover",
      }} */}
      <div id="short-info">
        <h1>
          Vi är en hästklinik med fokus på sporthästen med lång erfarenhet från
          akutsjukvård, ortopedi och kirurgi.<br/> Vi samarbetar med duktiga
          hovslagare, fysioterapeuter och rehabiliteringsanläggningar för att
          hitta en helheltslösning för dig och din häst.<br/> Vi håller oss i
          framkant när det gäller diagnostiska tekniker och behandling av olika
          skador.
        </h1>
      </div>
    </div>
  );
};

export default StartPage;

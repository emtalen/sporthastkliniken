import React from "react";

const TheClinic = () => {
  return (
    <div id="construction-container">
      <h1>Kliniken Häljeby</h1>
      <p>
        En dröm slår in! <br /> Kliniken hemma i Häljeby är äntligen klar. En
        klinik med stor och bred kunskap, familjär känsla och ett gott
        mottagande där vi ser helheten hos häst och ryttare. <br /> Uppbyggnaden
        har kunnat förverkligas med hjälp av EU: stöd för landsbygdsutveckling.
      </p>
      <p>
        Vi erbjuder tjänster såsom hältutredningar, besiktningar, sjukbeslag,
        kirurgi samt lektioner inom rehabilitering av din häst (tömkörning /
        gymnastikhoppning etc.). Kliniken är utrustad med röntgen, ultraljud,
        endoskopi, gastroskopi med mera, och vi kan behandla din häst med
        stamceller, PRP eller i-RAP samt med den senaste teknologin inom
        shockwaveterapi. <br /> Kliniken ligger alldeles intill E18, vid avfart
        124/ Munktorp, ca 15 min från Strömsholms hästcentrum.
      </p>
      <p>
        Bygget startade i september 2019 och blev klart i slutet av maj 2020.
        Den tidigare verksamheten Equiaid Veterinär AB fick byta namn och lokal,
        och från och med den 1 juni 2020 har vi jobbat i de nya fräscha
        lokalerna under namnet Sporthästkliniken Häljeby AB. <br /> Ett stort
        tack till G Construct för ett imponerande arbete, från gjutning av
        grunden till resning av stommen och färdigställning av den här vackra
        byggnaden. <br /> Vi vill också tacka Trädgårdsteknik i Mellansverige AB
        för den fantastiska Ebb & Flod ridbanan som vi använder på kliniken för
        undersökning av våra patienter.
      </p>
      <img
        src="/images/IMG_7962_kompressed.jpg"
        alt="Kliniken"
        id="big-image"
      />
      <img
        src="/images/IMG_7970_kompressed.jpg"
        alt="Kliniken"
        id="big-image"
      />
      <div id="image-container">
        <div className="row-image">
          <img
            src="/images/Screen Shot 2020-05-18 at 20.58.32.png"
            alt="Kliniken"
          />
        </div>
        <div className="row-image">
          <img
            src="/images/Screen Shot 2020-05-18 at 20.59.01.png"
            alt="Kliniken"
          />
        </div>
        <div className="row-image">
          <img
            src="/images/Screen Shot 2020-05-18 at 20.59.37.png"
            alt="Kliniken"
          />
        </div>
        <div className="row-image">
          <img
            src="/images/Screen Shot 2020-05-18 at 20.59.21.png"
            alt="kliniken"
          />
        </div>
      </div>
      <div id="logo-container">
        <img src="/images/ttms.png" alt="Trädgårdsteknik" id="logo-image-1" />

        <img src="/images/g_logga.png" alt="G Construct" id="logo-image-2" />

        <img
          src="/images/Logos_Schriftzug.png"
          alt="Dammann"
          id="logo-image-3"
        />
      </div>
    </div>
  );
};

export default TheClinic;

import React from "react";

const TheTeam = () => {
  return (
    <div id='team'>
      <div id='team-container'>
        <h1>Team</h1>
        <div className='team-member'>
          <img
            src='/images/Screenshot 2020-06-08 at 22.19.46.png'
            alt='Laura'
          />
          <div className='team-member-container'>
            <h2>Laura Hirvinen</h2>
            <p>
              “If you can dream it, you can do it”. Laura var 8 år gammal när
              hon ritade planritning på sin veterinärklinik. 2004 började hon
              jobba som veterinär, veterinärexamen tog hon från Helsingfors
              Universitet. Året 2005 började hon som intern på ett privat
              hästsjukhus i Finland men drömmarna var större redan då. <br />
              Året därpå kom hon in på en specialistutbildning inom hästkirurgi
              vid The Ohio State University, USA. Under dessa tre år fick hon
              jobba med, och lära sig från världsledande kirurger,
              anestesiologer, intermedicinare och intesivvårdsspecialister inom
              häst. Det gav henne en unik kompetens inom hästkirurgi samt enorm
              klinisk erfarenhet inom alla hästmedicinens olika grenar. Året
              2010 genomförde hon den svåra ACVS examen i SanDiego, Kalifornien
              och blev därmed den första skandinaviska veterinären med titeln
              Diplomate of American College of Veterinary Surgeons (DiplACVS).
              <br />
              Laura flyttade till Sverige 2009 och jobbade mellan 2009 - 2015 på
              Evidensia Specialisthästsjukhuset Strömsholm, varav den senaste
              tiden som överveterinär i kirurgi. Under hennes tid på Evidensia
              jobbade hon även som konsult på många olika Evidensia kliniker
              runt om i Sverige. <br /> Drömmen om något eget började växa fram
              under 2015 och i början av 2016 startade hon sin egen praktik
              under namnet Equiaid Veterinär AB. Den ambulatoriska verksamheten
              fick snabbt konverteras till ortopedimottagning på Equirehabs
              lokaler i Kvicksund. Utöver detta jobbade hon som konsulterande
              kirurg på Husaby Hästakut i Skara och på SLU i Uppsala. En snabb
              växande kundkrets och EU-stöd möjliggjorde den långvariga drömmen
              om egen klinik. <br /> Laura startade Sporthästkliniken Häljeby AB
              på sin gård den 1 juni 2020. Hon fortsätter att operera på Husaby
              Hästakut i Skara varannan vecka på tisdagar. Utöver detta är hon
              flitigt anlitat föreläsare av Svenska Ridsportförbundet. Hemma på
              gården har hon 5 hästar och hon syns ibland på dressyrbanorna med
              sina hästar.
            </p>
          </div>
        </div>
        <div className='team-member'>
          <img src='/images/mikakliniken.jpeg' alt='Mika' />
          <div className='team-member-container'>
            <h2>Mika Thalén</h2>
            <p>
              Mika började jobba på
              Sporthästkliniken 2018 och är spindeln i nätet på Sporthästkliniken. Hon driver en hästgård med sin man utanför
              Strömsholm där hon har sin häst Aida som hon tävlar hoppning med.
              Mika sköter alla bokningar och all kundkontakt som sker via sms,
              telefon och mejl och finns ofta på plats på Sporthästkliniken
              tillsammans med Laura och Emma.
            </p>
          </div>
        </div>
        <div className='team-member'>
          <img src='/images/emmakliniken.jpeg' alt='Emma' />
          <div className='team-member-container'>
            <h2>Emma Lindström</h2>
            <p>
              Emma började på Sporthästkliniken 2022 och är Lauras assistent vid all behandling av våra patienter.
              Hon har sitt stall i Köping i Macksta där hon har sin egna
              uppfödning född 2018 e Crusader Ice som matchas mot hoppbanorna
              samt ett litet gotlandsruss och två inackorderingar. Bor gör hon
              däremot bara ett stenkast från Sporthästkliniken med sin sambo och
              hans två barn. Emma är utbildad hipplog och har tidigare arbetat
              inom ridskolevärlden, senast som ridskolechef på Köpings ridklubb
              innan hon blev en i teamet på Sporthästkliniken.
            </p>
          </div>
        </div>
        <div className='team-member'>
          <img src='/images/IMG_4576.PNG' alt='Magnus' id='magnus-image' />
          <div className='team-member-container'>
            <h2>Magnus Smederöd </h2>
            <p>
              Hovslagare sedan 1993. Magnus är godkänd av Jordbruksverket och
              har examen i SHF Forbildning. Magnus innehar Mästarbrev sedan
              2015. Erfarenhet och skor flera discipliner; Dressyr, Hoppning,
              Fälttävlan, Reining och Trav. Magnus utför även föl korregering
              och sjukbeslag på häst. Sedan 2019 jobbar han med Black-Werkman
              Hoofcare, ett system som mäter hästens rörelse, steg och hovens
              olika belastningsfaser.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheTeam;

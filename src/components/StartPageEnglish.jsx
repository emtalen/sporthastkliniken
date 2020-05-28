import React from "react";

const StartPageEnglish = () => {
  return (
    <div id="start-page-english">
      {/* <div className="english-container"></div> */}
      <h1>WELCOME TO SPORTHÄSTKLINIKEN</h1>
      <div className="english-container" id="text-container">
        <h3>
          We are a horse clinic with long experience with emergency medical
          care, orthopaedics and surgery, focusing on the sport horse.
          <br />
          To find the complete solution for you and your horse we work with
          talented farriers, physiotherapists and rehabilitation facilities.{" "}
          <br />
          We stay at the forefront when it comes to diagnostic techniques and
          treatment of various injuries.
          <br /> Please do not hesitate to get in touch if you have any
          questions. We look forward hearing from you.
        </h3>
      </div>
        <img src="/images/61-bw.jpg" alt="Front" id="english-image" />
    </div>
  );
};

export default StartPageEnglish;

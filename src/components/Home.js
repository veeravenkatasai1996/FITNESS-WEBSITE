import React from "react";
import "./../App.css";

function Home() {
  return (
    <div className="home-container" id="">
      <video src="/images/videos/1.mp4" autoPlay loop muted />
      <div className="overlay"></div>
      <div className="text">
        <h1>
          <span>Work&nbsp;</span>
          <span>Sweat&nbsp;</span>
          <span>Achieve</span>
        </h1>
        <br />
        <h3>
          <span>Excuses&nbsp; </span>
          <span>Don't&nbsp; </span>
          <span>Burn&nbsp; </span>
          <span>Calories&nbsp;</span>
        </h3>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import "./Home.css";
import Explore from "./../Components/Explore";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      {/* <div className="home_box">
        <div className="home-left">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Explore />
      </div> */}
    </div>
  );
}

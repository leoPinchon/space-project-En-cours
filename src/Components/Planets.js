import React, { useEffect } from "react";
import { useState } from "react";
import "./styles/Planets.css";
import data from "../data/data.json";
import PlanetsNav from "./PlanetsNav";

// import imgs from '../data/assets/destination'

// import imgp from "../data/assets/destination/image-europa.png"

export default function Planets() {
  const [idPlanet, setIdPlanet] = useState(0);

  let imgPlanet = data.destinations[idPlanet].images.png;
  let descPlanet = data.destinations[idPlanet].description;
  let namePlanet = data.destinations[idPlanet].name;
  let distPlanet = data.destinations[idPlanet].distance;
  let travelPlanet = data.destinations[idPlanet].travel;
  // chem = require(chem)
  return (
    <div className="planets">
      <div>
        <img
          className="planet-img"
          src={require(`../${imgPlanet}`)}
          alt="planet"
        />
      </div>
      <div className="planets-right">
        <PlanetsNav setIdPlanet={setIdPlanet} />
        <h2>{namePlanet}</h2>
        <p>{descPlanet}</p>
        <div className="panets-info">
          <div>
            <h6>Avg. Distance</h6>
            <h5>{distPlanet}</h5>
          </div>
          <div>
            <h6>Est. Travel Time</h6>
            <h5>{travelPlanet}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

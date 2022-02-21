import { useState } from "react";
import Navbar from "../Components/Navbar";
import Planets from "../Components/Planets";
import './Destination.css'

export default function Destination() {


  return (
    <div className="destination">
      <Navbar />
      <h5 className="sub-title fs-sh1"><span>01</span>Pick your destination</h5>
      <Planets/>
    </div>
  );
}

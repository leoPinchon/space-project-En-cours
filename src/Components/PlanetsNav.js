
import './styles/PlanetsNav.css'

export default function PlanetsNav(props) {
    
  return (
    <nav className="planetsNav">
      <p tabindex="0" onClick={()=>props.setIdPlanet(0)}>Moon</p>
      <p tabindex="0" onClick={()=>props.setIdPlanet(1)}>Mars</p>
      <p tabindex="0" onClick={()=>props.setIdPlanet(2)}>Europa</p>
      <p tabindex="0" onClick={()=>props.setIdPlanet(3)}>Titan</p>
    </nav>
  );
}

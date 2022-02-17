import {useState} from 'react'
import './styles/Navbar.css'
import logo from '../assets/shared/logo.svg'
export default function Navbar() {

  //Menu burger visible ou non
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='header'>
        <img src={logo} alt="space logo" />
        <nav className='primary-nav-box'>
            <ul className='primary-nav'>
                <li><span>00</span>Home</li>
                <li><span>01</span>Destination</li>
                <li><span>02</span>Crew</li>
                <li><span>03</span>Technology</li>
            </ul>
        </nav>
        <nav className={`primary-nav-box-phone ${menuOpen && 'isOpen'}`}>
            <ul className='primary-nav primary-nav-phone'>
                <li><span>00</span>Home</li>
                <li><span>01</span>Destination</li>
                <li><span>02</span>Crew</li>
                <li><span>03</span>Technology</li>
            </ul>
        </nav>
        <button onClick={() =>setMenuOpen(!menuOpen)}className="isBurger">Yo</button>
    </header>
  )
}

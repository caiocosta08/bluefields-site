import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa';
import { Button } from './Button';
import Logo from '../imgs/logo.png';
import '../components/Navbar.css';
import { IconContext } from 'react-icons/lib';


function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick =() => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
 
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={Logo} className='navbar-icon'/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <button onClick={onClick} className="nav-links">Programas</button>
                            <nav ref={dropdownRef} className={`menu ${isActive ? 'activee' : 'inactive'}`}>
                            <ul>
                                <li><Link to='/corporate'>CORPORATE</Link></li>
                                <li><Link to='/tbb7'>BIODIGITAL TBB7</Link></li>
                                <li><Link to='/sparks'>SPARKS</Link></li>
                            </ul>
                            </nav>
                        </li>
                        <li className="nav-item">
                            <Link to='/blog' className="nav-links">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contato' className="nav-links">Contato</Link>
                        </li>
                    </ul>
                    <ul className="nav-menu2">
                    <li className="nav-item2">
                            <a className="nav-links2" href="https://www.facebook.com/bluefieldsdev/">
                            <FaFacebookSquare/>  
                            </a>
                        </li>
                        <li className="nav-item2">
                            <a className="nav-links2" href="https://www.instagram.com/bluefields_aceleradora/">
                            <FaInstagram/>  
                            </a>
                        </li>
                        <li className="nav-item2">
                            <a className="nav-links2" href="https://www.linkedin.com/company/bluefields-aceleradora/">
                            <FaLinkedin/>  
                            </a>
                        </li>
                        <li className="nav-item2">
                            <a className="nav-links2" href="https://www.youtube.com/channel/UCboDJPDyBJQjb0p3V9SMuvg">
                            <FaYoutube/>  
                            </a>
                        </li> 
                    </ul>
                </div>
            </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar

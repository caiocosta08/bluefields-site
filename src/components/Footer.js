import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube, FaPhoneAlt, FaEnvelope} from 'react-icons/fa';
import { BsGeoAlt } from "react-icons/bs";
import logo from '../imgs/logo.png'
import blog from '../imgs/blog.png'
import foto12 from '../imgs/foto12.png'
import foto13 from '../imgs/foto13.png'
import foto14 from '../imgs/foto14.png'
import foto16 from '../imgs/foto16.png'
import foto17 from '../imgs/foto17.png'


function Footer() {
    return (
            <div className="footer-col">
                <div className="footer-header">
                    <Link to='/'>
                        <img className="footer-logo" alt='logo' src={logo}/>
                    </Link>
                    <ul className="nav-menu-footer">
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
                <div className="footer-content">
                        <div className="adress">
                                <BsGeoAlt className="BsGeoAlt"/>
                                <div>
                                    <p>Alameda Santos, 2335 - Cerqueira César</p> 
                                    <p>São Paulo - SP, 01419-101</p>
                                    <p>CNPJ: 28.330.251/0001-53</p>
                                </div>                                
                        </div>
                        <div className="adress3">
                                <div>
                                    <FaPhoneAlt className="BsGeoAlt"/>
                                    <p>	+55 (11) 93295-4465</p> 
                                </div> 
                                <div>
                                    <FaEnvelope className="BsGeoAlt"/> 
                                    <p>contato@bluefieldsdev.com</p> 
                                </div>                              
                        </div>
                        <div className="adress2 blog">
                            <h1>Blog</h1>
                            <img src={blog} alt="illustrative icon"/>
                        </div>
                        <div className="adress2 fotos">
                            <h1>Fotos do Instagram</h1>
                            <div className="photosMidia">
                            <img src={foto12} alt="illustrative icon"/>
                            <img src={foto13} alt="illustrative icon"/>
                            {/* <img src={blog}/> */}
                            <img src={foto14} alt="illustrative icon"/>
                            <img src={foto16} alt="illustrative icon"/>
                            <img src={foto17} alt="illustrative icon"/>
                            </div>
    
                        </div>
                </div>
                        <p className="footerText">Copyright ©2021 Todos os direitos reservados</p>
            </div>
    )
}

export default Footer


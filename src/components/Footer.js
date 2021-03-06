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
        <div>
           <div className="footer-section">
               <div className="container-footer">
                   <div className="footer-row fundo-footer">
                       <div className="footer-col">
                           <Link to='/'>
                            <img className="footer-logo" src={logo}/>
                           </Link>
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
                            <div style={{display:"flex"}}>
                                    <div className="adress">
                                            <BsGeoAlt className="BsGeoAlt"/>
                                            <div>
                                                <p>Alameda Santos, 2335 - Cerqueira C??sar</p> 
                                                <p>S??o Paulo - SP, 01419-101</p>
                                                <p>CNPJ: 28.330.251/0001-53</p>
                                            </div>                                
                                    </div>
                                    <div className="adress2">
                                            <div style={{display:"flex"}}>
                                                <FaPhoneAlt className="BsGeoAlt"/>
                                                <p>	+55 (11) 93295-4465</p> 
                                            </div> 
                                            <div style={{display:"flex"}}>
                                            <FaEnvelope className="BsGeoAlt"/> 
                                                <p>	+55 (11) 93295-4465</p> 
                                            </div>                              
                                    </div>
                                    <div className="adress2 blog">
                                        <h1>Blog</h1>
                                        <img src={blog}/>
                                    </div>
                                    <div className="adress2 fotos">
                                        <h1>Fotos do Instagram</h1>
                                        <div className="photosMidia">
                                        <img src={foto12}/>
                                        <img src={foto13}/>
                                        {/* <img src={blog}/> */}
                                        <img src={foto14}/>
                                        <img src={foto16}/>
                                        <img src={foto17}/>
                                        </div>
               
                                    </div>
                            </div>
                                <hr/>
                                    <p className="footerText">Copyright ??2021 Todos os direitos reservados</p>
                       </div>
                   </div>
               </div>
           </div>
          
        </div>
    )
}

export default Footer


import './MobileNavigation.css'
import logoCloud from "../../../img/logo/logo_cloud.webp"
import logo from "../../../img/logo/logo.webp"
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const MobileNavigation = () => {
    const [active, setActive] = useState(false);

    return (
        <>
            <section className="navigationSlider">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-6">
                            <div className="logoBox">
                                <Link to="/">
                                    <div className="logoCloud">
                                        <img src={logoCloud} alt="logoCloud" className="img-fluid" />
                                    </div>
                                    <div className="logo">
                                        <img src={logo} alt="logo" className="img-fluid" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-6">
                            <div className="menubar">
                                <div className="mobile-menu" onClick={() => setActive(!active)}>
                                    <div className={active ? 'menu_click active' : 'menu_click'}>
                                        <div id="top"></div>
                                        <div id="middle"></div>
                                        <div id="bottom"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={active ? 'mobileSliderBox active' : 'mobileSliderBox'}>
                <div className='mobileSliderContent'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className='mobileSliderContentList'>
                        <ul>
                            <Link to="/">
                                <li>Home</li>
                            </Link>
                            <Link to="/about-us">
                                <li>About us</li>
                            </Link>
                            <Link to="/curriculum">
                                <li>curriculam</li>
                            </Link>
                            {/* <Link to="/gallery">
                                <li>GALLERY</li>
                            </Link> */}
                            <Link to="/contact-us">
                                <li>contact us</li>
                            </Link>
                        </ul>
                        <h4>Visit Us Daily:</h4>
                        <p>9870 St Vincent Place,
                            Glasgow, Dc 45 Fr 45</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:LittleLambs@gmail.com">LittleLambs@gmail.com</a></p>
                        <p><FontAwesomeIcon icon={faPhone} /> <a href="tel:1234567890">1234567890</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNavigation
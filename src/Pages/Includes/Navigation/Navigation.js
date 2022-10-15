import './Navigation.css'
import logoCloud from "../../../img/logo/logo_cloud.webp"
import logo from "../../../img/logo/logo.webp"
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const Navigation = () => {

    const [stickyNav, setStickyNav] = useState()
    const stickyNavbar = () => {
        let windowHeight = window.scrollY;
        windowHeight > 10 ? setStickyNav('stickyNav') : setStickyNav("null")
    }
    useEffect(() => {
        window.addEventListener("scroll", stickyNavbar)
    }, [])

    return (
        <>
            <section className="container-fluid p-0">
                <div className={`navigationBg ${stickyNav}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
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
                            <div className="col-lg-9">
                                <div className='navigationList'>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navigation
import './Contact.css'
import mail from '../../img/icons/mail.webp'
import call from '../../img/icons/call.webp'
import location from '../../img/icons/location.webp'

const Header = () => {
    return (
        <>
            <section className="container-fluid p-0">
                <div className="aboutHeaderBg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title aboutTitle">
                                    <h2>Contact</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                <div className="contactWays">
                                    <div className="contactWaysIcon">
                                        <img src={location} alt="location" className='img-fluid' />
                                    </div>
                                    <div className="contactWaysContent">
                                        <h4>Visit Us Daily:</h4>
                                        <p>Villa no 22,
                                            317- 33rd Street,
                                            Near Mankhool Park/ADCB metro station,
                                            Bur Dubai</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                <div className="contactWays">
                                    <div className="contactWaysIcon">
                                        <img src={call} alt="call" className='img-fluid' />
                                    </div>
                                    <div className="contactWaysContent">
                                        <h4>Call Us:</h4>
                                        <p>
                                            <a href="tel:+971 504812715">+971 504812715</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                <div className="contactWays">
                                    <div className="contactWaysIcon">
                                        <img src={mail} alt="mail" className='img-fluid' />
                                    </div>
                                    <div className="contactWaysContent">
                                        <h4>Mail Us:</h4>
                                        <p>
                                            <a href="mailto:mail.littlelambs@gmail.com">mail.littlelambs@gmail.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
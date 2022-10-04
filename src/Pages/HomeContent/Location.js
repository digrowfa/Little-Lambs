import rightArrow from "../../img/home/right.webp"


const Location = () => {
    return (
        <>
            <section className="conatiner-fluid p-0">
                <div className="homeLocationBg">
                    <div className="container">
                        <div className="homeLocationBox">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="homeLocationContent">
                                        <p>9870 St Vincent Place, Glasgow, Dc 45 Fr 45</p>
                                        <button>Visit Now <img src={rightArrow} alt="rightArrow" className="img-fluid" /></button>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="homeLocationContentMap">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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

export default Location
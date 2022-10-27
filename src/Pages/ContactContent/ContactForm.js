const ContactForm = () => {
    return (
        <>
            <section className="container-fluid p-0">
                <div className="contactFormBg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="contactFormBox">
                                    <form>
                                        <div className="contactFormTitle">
                                            <div className="contactFormTitleName">
                                                <h2>Get in Touch</h2>
                                            </div>
                                            <div className="contactFormTitleBefore"></div>

                                        </div>
                                        <p>Have some suggestions or just want to say hi? Contact us:</p>
                                        <div className="formGroup row">
                                            <div className="col-12">
                                                <div class="form-floating mb-3">
                                                    <input type="name" class="form-control" id="floatingInput" placeholder="Himanshu Sharma" name="name" />
                                                    <label for="floatingInput">Your Name</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formGroup row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div class="form-floating mb-3">
                                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" />
                                                    <label for="floatingInput">Email address</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div class="form-floating mb-3">
                                                    <input type="number" class="form-control" id="floatingInput" placeholder="9555271705" name="number" />
                                                    <label for="floatingInput">Phone Number</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formGroup row">
                                            <div className="col-12">
                                                <div class="form-floating">
                                                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" name="comment"></textarea>
                                                    <label for="floatingTextarea">Comments</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formGroup row">
                                            <div className="col-12">
                                                <div className="formBtn">
                                                    <button>Post a Comment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="contactMap">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.580295554852!2d77.06806671549629!3d28.70219898767422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d069d72fc5099%3A0xb6ecd829efcd7e32!2sKarn%20Mahashwari%20Stationary%20And%20Gift%20Store!5e0!3m2!1sen!2sin!4v1665640444311!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default ContactForm
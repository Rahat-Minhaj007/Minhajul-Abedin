import React from 'react';
import './Contact.css';
import Bounce from 'react-reveal/Bounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import emailjs from 'emailjs-com';



const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_o3c2ayh', 'template_ympn2fy', e.target, 'user_xxhnelPSmdEXSpKa8CGOo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <section>

            <div className="aboutFooter container-fluid">
                <div className="row ">
                    <div className="col-md-3 ml-5 mt-5 footerLogo">
                        <a className="fw-bold fs-4 " href="#about" style={{ fontFamily: 'Dancing Script, cursive',color:'black',textDecoration: 'none'}}>MINHAJUL</a>
                    </div>
                    <div className="col-md-5 mt-5" style={{color:'black'}}>

                        <form className="contact-form" onSubmit={sendEmail}>
                            <div className="row">
                                <div class="mb-3 col-md-5">
                                    <label for="exampleInputEmail1" class="form-label fw-bold ">Name</label>
                                    <input type="text" class="form-control" name='contact_number' />

                                </div>
                                <div class="mb-3 col-md-5">
                                    <label for="exampleInputEmail1" class="form-label fw-bold ">Email</label>
                                    <input type="text" class="form-control" name="user_name" />
                                </div>
                                <div class="form-floating mb-3 col-md-10">
                                    <textarea class="form-control" name="message" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                    <label for="floatingTextarea2"></label>
                                </div>
                            </div>


                            <button type="submit" class="btn btn-outline-dark  fw-bold text-uppercase mt-3">Submit</button>
                        </form>

                    </div>

                    <div style={{ fontSize: "20px", fontFamily: 'poppins' ,color:'black'}} className="col-md-3 mt-5 " >
                        <h5>GET IN TOUCH</h5>
                        <hr />
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 23/25 Bamoil,Demra,Dhaka</p>
                        <p><FontAwesomeIcon icon={faPhone} /> +8801521439303<br /></p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> rahatminhaj444@gmail.com</p>
                        <h2 className="mt-3"><a href="https://www.facebook.com/rahat.minhaj" target='_blank' style={{color:'black'}} rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a> <a href="https://github.com/Rahat-Minhaj007" target='_blank' className=" ms-4" style={{color:'black'}} rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a> <a  href="https://www.linkedin.com/in/minhajul-abedin-rahat-815286146/" target='_blank' className=" ms-4" rel="noreferrer" style={{color:'black'}}><FontAwesomeIcon icon={faLinkedin} /></a> <a href="https://www.instagram.com/rahat_minhaj007/" target='_blank' className=" ms-4" style={{color:'black'}} rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></h2>
                    </div>
                </div>

                <div className="row mt-5 ">
                    <div style={{ fontFamily: 'poppins' }} className="col-md-5 ml-5 mt-5 text-dark">
                        <small >copyrights©Rahat 2021,all rights reserved</small>
                    </div>
                </div>
            </div>



        </section>

    );
};

export default Contact;
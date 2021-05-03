import React from 'react';
import rahat from '../../../images/rahat.jpg';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const HeaderMain = () => {
    return (
        <div style={{ height: "930px" }} className=" d-flex align-items-center justify-content-center text-dark p-5 header-content">
            <div className="offset-md-6">
                <img style={{ width: '30%', borderRadius: '50%', height: "20%" }} src={rahat} alt="" />
                <h1 className="text-uppercase mt-3 ">Hello, I'm minhajul abedin</h1>

                <h3 className="text-uppercase">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Mern stack developer')
                                .pauseFor(2500)
                                .deleteAll()
                            typewriter.typeString('Mern stack developer')
                                .pauseFor(2500)
                                .deleteAll()
                            typewriter.typeString('Mern stack developer')
                                .pauseFor(2500)
                                .deleteAll()
                            typewriter.typeString('Mern stack developer')
                                .pauseFor(3500)
                                .deleteAll()
                            typewriter.typeString('Mern stack developer')
                                .pauseFor(4500)
                                .deleteAll()
                            typewriter.typeString('Mern stack developer')
                                .pauseFor(5500)
                                .deleteAll()
                            typewriter.typeString('Mern stack developer')
                                .pauseFor(6500)
                                .deleteAll()
                            typewriter.typeString('Mern stack developer')

                                .start();
                        }}
                    />
                </h3>
                <h2 className="mt-3"><a href="https://www.facebook.com/rahat.minhaj" target='_blank' className="text-dark"><FontAwesomeIcon icon={faFacebook} /></a> <a href="https://github.com/Rahat-Minhaj007" target='_blank' className="text-dark ms-4"><FontAwesomeIcon icon={faGithub} /></a> <a href="https://www.linkedin.com/in/minhajul-abedin-rahat-815286146/" target='_blank' className="text-dark ms-4"><FontAwesomeIcon icon={faLinkedin} /></a> <a href="https://www.instagram.com/rahat_minhaj007/" target='_blank' className="text-dark ms-4"><FontAwesomeIcon icon={faInstagram} /></a></h2>

               
            </div>

        </div>
    );
};

export default HeaderMain;
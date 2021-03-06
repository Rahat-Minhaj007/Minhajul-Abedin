import React from 'react';
import rahat from '../../../images/rahat.jpg';

import Typical from 'react-typical'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const HeaderMain = () => {
    return (
        <div style={{ height: "930px" }} className=" d-flex align-items-center  text-dark p-5 header-content">
            <div className="d-flex align-items-center flex-column justify-content-center offset-sm-3 ">
                <img style={{ width: '20%', borderRadius: '50%', height: "20%" }} src={rahat} alt="" />
                <h1 style={{color:'black',fontFamily:'Poppins'}} className="text-uppercase mt-3 ">Hello, I'm minhajul abedin</h1>

                <h3 style={{color:'black',fontFamily:'Poppins'}} className="text-uppercase">
                    <Typical
                        steps={[
                             
                            'mern stack developer', 3000,
                            'React developer',3000,
                            'front-end developer',3000,
                            'javaScript developer',3000,
                        ]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </h3>

                <h2  className="mt-3"><a href="https://www.facebook.com/rahat.minhaj" target='_blank' style={{color:'black'}} rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a> <a href="https://github.com/Rahat-Minhaj007" style={{color:'black'}} target='_blank' className=" ms-4" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a> <a href="https://www.linkedin.com/in/minhajul-abedin-rahat-815286146/" style={{color:'black'}} target='_blank' className=" ms-4" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a> <a href="https://www.instagram.com/rahat_minhaj007/" style={{color:'black'}} target='_blank' className=" ms-4" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></h2>


            </div>

        </div>
    );
};

export default HeaderMain;
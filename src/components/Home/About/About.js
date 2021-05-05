import React from 'react';
import rahat from '../../../images/rahat2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Bounce from 'react-reveal/Bounce';
const About = () => {
    return (
        <section id='about' className="about-container container py-5  mt-5">
            <div className="row d-flex justify-content-between">
                <Bounce left>
                    <div className="col-md-5 aboutImg" data-aos="zoom-in-up">
                        <img style={{ width: "100%", height: "680px", borderRadius: '10px' }} src={rahat} alt="" />

                    </div>
                </Bounce>
                <Bounce right>
                    <div className="col-md-6 aboutContent mt-4 ">
                        <h2 className="text-uppercase "  style={{fontFamily: 'poppins'}}><span style={{ color: "#76c96e", fontFamily: 'poppins'}}>A</span>bout Me</h2>
                        <p className="py-3 mt-2 text-justify" style={{ color: 'black', fontSize: "20px", fontFamily: 'poppins' }}>I am Minhajul Abedin Rahat . I'm a passionate REACT and MERN Stack Developer who has been working in this field for more than 5 months now.<br />I have vast experience in React JS, HTML5, CSS3, React Bootstrap, Javascript, ES6, Bootstrap, API,Firebase!<br />  You have an idea, you need someone to bring it to life Or you already have a product that needs to be redined to meet the demand of 2021 users!. This is where I come in! With my knowledge and creativity. I can take your idea, your product to the next level. Let's have a chat and discuss your idea!</p>
                        <div className='row mt-2' style={{ color: '#74757f', fontSize: "20px", fontFamily: 'roboto' }}>
                            <div className='col-md-6' style={{ color: "black", fontFamily: 'poppins' }}>
                                <p ><span style={{ color: "#76c96e", fontFamily: 'poppins', fontWeight: '700' }}>Name</span> : Minhajul Abedin Rahat</p>
                                <p><span style={{ color: "#76c96e", fontFamily: 'poppins', fontWeight: '700' }}>Hobby</span> : Codding | Travelling | Watch Movie</p>

                            </div>
                            <div className='col-md-6' style={{ color: "black", fontFamily: 'poppins' }}>

                                <p><span style={{ color: "#76c96e", fontFamily: 'poppins', fontWeight: '700' }}>Education</span> : B.sc in CSE</p>
                                <p ><span style={{ color: "#76c96e", fontFamily: 'poppins', fontWeight: '700' }}>Remote</span> : Available</p>
                            </div>

                        </div>
                        <div className="d-flex ">
                            <div>
                                <a style={{ fontFamily: 'poppins', color: 'black' }} href="https://drive.google.com/uc?export=download&id=1zAoMWyLlNoB60Q6i7VX3IkrPnkdL_-U-"> <button className="btn btn-brand text-uppercase mt-3"><strong><FontAwesomeIcon icon={faDownload} /> Resume</strong></button></a>
                            </div>
                            <div>
                                <a href="mailto:rahatminhaj444@gmail.com" target='_blank' style={{ fontFamily: 'poppins', color: 'black' }}><button className="btn btn-brand text-uppercase mt-3 ms-5"><strong><FontAwesomeIcon icon={faEnvelope} /> Contact Me</strong></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Bounce>
            </div>

        </section>
    );
};

export default About;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Roll from 'react-reveal/Roll';
import './Resume.css';
import Bounce from 'react-reveal/Bounce';

const Resume = () => {
    return (
        <section id='resume' className="resume-container container py-5  mt-5">
            <Bounce left>
                <h2 className="text-uppercase text-center "><span style={{ color: "#51a4a1" }}><FontAwesomeIcon style={{ color: '#51a4a1', width: '30px', fontSize: '30px' }} icon={faFile} /> R</span>esume</h2>
            </Bounce>
            <div className="row d-flex justify-content-between mt-5 py-5" style={{ color: '#74757f', fontSize: "17px", fontFamily: 'roboto' }} >
                <Roll left>
                    <div className="col-md-5" >
                        <h3 className="text-center mb-4"><FontAwesomeIcon style={{ color: '#51a4a1', width: '30px', fontSize: '30px' }} icon={faBriefcase} /> EXPERIENCE</h3>

                        <div className='exp' style={{ border: "none", boxShadow: "10px 10px 40px rgb(240, 240, 240)", width: '100%' }}
                            class="card mt-4" >
                            <div class="card-body">
                                <h4 class="card-title">INTERNSHIP</h4>
                                <h5>Apurba DIU R&D Lab</h5>
                                <p>Data Annotator</p>
                                <p>There I'm Working on Bangladesh's First Bangla OCR Project.</p>
                                <br />
                                <button type="button" class="btn btn-outline-success">11/2020-01/2021</button>
                            </div>
                        </div>

                    </div>
                </Roll>
                <div className="col-md-5">
                    <h3 className="text-center mb-4 mt-2"><FontAwesomeIcon style={{ color: '#51a4a1', width: '30px', fontSize: '30px' }} icon={faGraduationCap} /> EDUCATION</h3>
                    <Roll right>
                        <div style={{ border: "none", boxShadow: "10px 10px 40px rgb(240, 240, 240)", width: '100%' }}
                            class="card mt-4" >
                            <div class="card-body">
                                <h4 class="card-title">Daffodil International University</h4>
                                <h5>B.sc in Computer Science & Engineering</h5>
                                <br />
                                <button type="button" class="btn btn-outline-success">2016-2020</button>

                            </div>
                        </div>
                    </Roll>

                    <Roll right>
                        <div style={{ border: "none", boxShadow: "10px 10px 40px rgb(240, 240, 240)", width: '100%' }}
                            class="card mt-4" >
                            <div class="card-body">
                                <h4 class="card-title">Dr. Mahbubur Rahman Mollah College</h4>
                                <h5> Higher Secondary School Certificate</h5>
                                <br />
                                <button type="button" class="btn btn-outline-success">2013-2015</button>

                            </div>
                        </div>
                    </Roll>

                    <Roll right>
                        <div style={{ border: "none", boxShadow: "10px 10px 40px rgb(240, 240, 240)", width: '100%' }}
                            class="card mt-4" >
                            <div class="card-body">
                                <h4 class="card-title">Shamsul Haque Khan School & College</h4>
                                <h5>Secondary School Certificate</h5>
                                <br />
                                <button type="button" class="btn btn-outline-success">2008-2013</button>

                            </div>
                        </div>
                    </Roll>

                </div>
            </div>

        </section>
    );
};

export default Resume;
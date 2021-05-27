import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './Resume.css';


const Resume = () => {
    return (
        <section id='resume' className="resume-container container-fluid py-5  mt-5" >

            <div data-aos="fade-right">
                <h2 className="text-uppercase text-center " style={{ fontFamily: 'poppins' }}><FontAwesomeIcon style={{ color: '#76c96e', width: '18px', fontSize: '30px' }} icon={faFile} /><span style={{ color: "#76c96e", fontFamily: 'poppins' }}> R</span>esume</h2>
            </div>

            <div className="row d-flex justify-content-around resume mt-5 py-5" style={{ color: 'black', fontSize: "17px", fontFamily: 'poppins' }} >

                <div className="col-md-3" >
                    <h3 className="text-center "><FontAwesomeIcon style={{ color: 'Black', width: '30px', fontSize: '30px' }} icon={faBriefcase} /> EXPERIENCE</h3>

                    <div data-aos="zoom-in" className='exp mt-4' style={{ border: "none", width: '100%' }}
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

                <div className="col-md-3">
                    <h3 className="text-center mb-4 mt-2"><FontAwesomeIcon style={{ color: 'Black', width: '30px', fontSize: '30px' }} icon={faGraduationCap} /> EDUCATION</h3>

                    <div data-aos="zoom-in" style={{ border: "none", width: '100%' }}
                        class="card mt-4" >
                        <div class="card-body">
                            <h4 class="card-title">Daffodil International University</h4>
                            <h5>B.sc in Computer Science & Engineering</h5>
                            <br />
                            <button type="button" class="btn btn-outline-success">2016-2020</button>

                        </div>
                    </div>

                    <div data-aos="zoom-in" style={{ border: "none", width: '100%' }}
                        class="card mt-4" >
                        <div class="card-body">
                            <h4 class="card-title">Dr. Mahbubur Rahman Mollah College</h4>
                            <h5> Higher Secondary School Certificate</h5>
                            <br />
                            <button type="button" class="btn btn-outline-success">2013-2015</button>

                        </div>
                    </div>

                    <div data-aos="zoom-in" style={{ border: "none", width: '100%' }}
                        class="card mt-4" >
                        <div class="card-body">
                            <h4 class="card-title">Shamsul Haque Khan School & College</h4>
                            <h5>Secondary School Certificate</h5>
                            <br />
                            <button type="button" class="btn btn-outline-success">2008-2013</button>

                        </div>
                    </div>


                </div>
            </div>

        </section>
    );
};

export default Resume;
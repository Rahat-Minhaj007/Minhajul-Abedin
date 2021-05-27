import React from 'react';
import blog1 from '../../../images/blog1.jpeg';
import blog2 from '../../../images/blog2.png';
import blog3 from '../../../images/blog3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
    return (
        <section id='blog' className="blog-container container  py-5  mt-5">
            <div data-aos="fade-right">

                <h2 className="text-uppercase text-center " style={{ fontFamily: 'poppins' }}><span style={{ color: "#76c96e" }}><FontAwesomeIcon style={{ color: '#76c96e', width: '30px', fontSize: '30px' }} icon={faBlog} /> B</span>log</h2>
            </div>


            <div className="row d-flex justify-content-center   mt-5 py-5" style={{ color: 'black', fontSize: "20px", fontFamily: 'roboto' }}>
                <div className='col-md-10  project-card' data-aos="zoom-in">
                    <div className="card mb-3 pro" style={{ border: "none", width: "100%", boxShadow: "10px 10px 40px rgb(240, 240, 240)" }}>
                        <img style={{ width: '100%' }} src={blog1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 style={{ color: '#76c96e', fontFamily: 'roboto' }} className="card-title text-center">Basic JavaScript QA</h4>

                            <p style={{ color: 'black', fontSize: "18px", fontFamily: 'roboto', height: '5rem' }}>JavaScript is a single thread language that reads the code & executes the code in a synchronized way...</p>
                            
                                <a  href='https://rahatminhaj444.medium.com/basic-javascript-qa-7c47426147b5' target='_blank' rel="noreferrer"><button className='btn btn-outline-success fw-bold mt-3 text-uppercase text-center blog'><FontAwesomeIcon icon={faBookOpen} /> READ MORE...</button></a>
                            

                        </div>


                    </div>
                </div>

                <div className='col-md-10  project-card mt-5'  data-aos="zoom-in">
                    <div className="card mb-3 pro" style={{ border: "none", width: "100%", boxShadow: "10px 10px 40px rgb(240, 240, 240)" }}>
                        <img style={{ width: '100%' }} src={blog2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 style={{ color: '#76c96e', fontFamily: 'roboto' }} className="card-title text-center">React’s Basic Fundamental Concept</h4>

                            <p style={{ color: 'black', fontSize: "18px", fontFamily: 'roboto', height: '5rem' }}>React is a javaScript’s popular library. Basically, React is that kind of library that is used to build UI(User Interface)...</p>

                            <a  href='https://rahatminhaj444.medium.com/reacts-basic-fundamental-concept-d5d301c68d23' target='_blank' rel="noreferrer"><button className='btn btn-outline-success fw-bold mt-3 text-uppercase text-center blog'><FontAwesomeIcon icon={faBookOpen} /> READ MORE...</button></a>

                        </div>

                    </div>
                </div>

                <div className='col-md-10  project-card mt-5' data-aos="zoom-in">
                    <div className="card mb-3 pro" style={{ border: "none", width: "100%", boxShadow: "10px 10px 40px rgb(240, 240, 240)" }}>
                        <img style={{ width: '100%' }} src={blog3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 style={{ color: '#76c96e', fontFamily: 'roboto' }} className="card-title text-center">JavaScript’s Interesting Things</h4>

                            <p style={{ color: 'black', fontSize: "18px", fontFamily: 'roboto', height: '5rem' }}>we know that in the javascript compiler, read the code line by line. If it’s got an error, it will stop in that place. Don’t move forward, so handle this error... </p>

                            
                            <a  href='https://rahatminhaj444.medium.com/javascripts-interesting-things-62bbb8270b08' target='_blank' rel="noreferrer"><button className='btn btn-outline-success fw-bold mt-3 text-uppercase text-center blog'><FontAwesomeIcon icon={faBookOpen} /> READ MORE...</button></a>

                        </div>

                    </div>
                </div>
            </div>



        </section>
    );
};

export default Blog;
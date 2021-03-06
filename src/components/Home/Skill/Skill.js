import React from 'react';
import './Skill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faFistRaised, faTools, faCodeBranch, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


const Skill = () => {
    return (
        <section id='skill' className="skill-container container-fluid py-5  mt-5">

            <div data-aos="fade-right">
                <h2 className="text-uppercase text-center " style={{ fontFamily: 'poppins' }}><FontAwesomeIcon style={{ color: "#76c96e" }} icon={faCode} /><span style={{ color: "#76c96e" }}> S</span>kill</h2>
            </div>


            <div className="row d-flex justify-content-center skills mt-5 py-5" style={{ color: 'whiteSmoke', fontSize: "20px", fontFamily: 'poppins' }}>

                <div className="col-md-3 mt-2" data-aos="fade-up">
                    <h3 className='text-center text-uppercase fw-bold ' style={{ color: 'black', fontFamily: 'poppins' }}><FontAwesomeIcon style={{ width: '30px', fontSize: '30px' }} icon={faFistRaised} /> Expertise</h3>
                    <br />
                    <div className='text-center' >
                        <p><span className='fw-bold' >✓</span> JavaScript</p>
                        <p><span className='fw-bold' >✓</span> ES6</p>
                        <p><span className='fw-bold' >✓</span> React JS</p>
                        <p><span className='fw-bold' >✓</span> React Router</p>
                        <p><span className='fw-bold' >✓</span> REST API</p>
                        <p><span className='fw-bold'>✓</span> Firebase</p>
                        <p><span className='fw-bold' >✓</span> React Bootstrap</p>
                        <p><span className='fw-bold' >✓</span> HTML5</p>
                        <p><span className='fw-bold' >✓</span> CSS3</p>
                        <p><span className='fw-bold'>✓</span> Bootstrap</p>
                    </div>

                </div>

                <div className="col-md-3 mt-2" data-aos="fade-down">

                    <h3 className=' text-center text-uppercase fw-bold' style={{ color: 'black', fontFamily: 'poppins' }}><FontAwesomeIcon style={{ width: '30px', fontSize: '30px' }} icon={faCodeBranch} /> Comfortable</h3>
                    <br />
                    <div className='text-center'>
                        <p><span className='fw-bold' >✓</span> Node.JS</p>
                        <p><span className='fw-bold' >✓</span> Express.JS</p>
                        <p><span className='fw-bold' >✓</span> MongoDB</p>
                        <p><span className='fw-bold'>✓</span> JSON</p>
                        <p><span className='fw-bold' >✓</span> SASS</p>
                        <p><span className='fw-bold' >✓</span> Material UI</p>
                        <p><span className='fw-bold'>✓</span> Python</p>
                        <p><span className='fw-bold' >✓</span> C</p>
                    </div>

                </div>

                <div className="col-md-3 mt-2" data-aos="fade-up">

                    <h3 className=' text-center text-uppercase fw-bold' style={{ color: 'black', fontFamily: 'poppins' }}><FontAwesomeIcon style={{ width: '30px', fontSize: '30px' }} icon={faQuoteLeft} /> Familiar</h3>
                    <br />
                    <div className='text-center'>
                        <p><span className='fw-bold' >✓</span> Redux.JS</p>
                        <p><span className='fw-bold'>✓</span> Next.JS</p>
                        <p><span className='fw-bold'>✓</span> Typescript</p>
                        <p><span className='fw-bold' >✓</span> GraphQL</p>
                        <p><span className='fw-bold' >✓</span> React Native</p>
                        <p><span className='fw-bold' >✓</span> AJAX</p>
                    </div>

                </div>


                <div className="col-md-3 mt-2" data-aos="fade-down">

                    <h3 className=' text-uppercase fw-bold text-center' style={{ color: 'black', fontFamily: 'poppins' }}><FontAwesomeIcon style={{ width: '30px', fontSize: '30px' }} icon={faTools} /> Tools</h3>
                    <br />
                    <div className='text-center'>
                        <p><span className='fw-bold'>✓</span> Git(version control)</p>
                        <p><span className='fw-bold'>✓</span> Chrome Dev Tool</p>
                        <p><span className='fw-bold' >✓</span> NPM</p>
                        <p><span className='fw-bold' >✓</span> Netlify</p>
                        <p><span className='fw-bold'>✓</span> Heroku</p>
                        <p><span className='fw-bold' >✓</span> VS Code</p>

                    </div>
                </div>

            </div>

        </section>
    );
};

export default Skill;
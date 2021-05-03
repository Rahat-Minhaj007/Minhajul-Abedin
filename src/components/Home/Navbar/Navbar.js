import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';


const Navbar = () => {
    

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid  ">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <a className="navbar-brand  fw-bold fs-4" href="#about" style={{fontFamily:'Dancing Script, cursive'}}>MINHAJUL</a>
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto navbarStyle">

                        <li className="nav-item">
                            <a className="nav-link me-5 active fw-bold fs-6" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5  fw-bold fs-6" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5  fw-bold fs-6" href="#skill">Skill</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5  fw-bold fs-6" href="#resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5  fw-bold fs-6" href="#project">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5  fw-bold fs-6" href="#blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5  fw-bold fs-6" href="#contact">Contact</a>
                        </li>
                       

                    </ul>
                   
                </div>
            </div>
            <button className="btn btn-brand fw-bold fixed-bottom ms-auto mb-5 " style={{marginRight:'100px'}}><a href="#home"><FontAwesomeIcon style={{ color: 'white', width: '30px',fontSize:'30px' }} icon={faAngleUp} /></a></button>
        </nav>
    );
};

export default Navbar;
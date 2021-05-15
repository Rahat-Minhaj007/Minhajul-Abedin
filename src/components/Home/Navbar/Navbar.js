import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faHome, faAddressCard, faCode, faFile, faTasks, faBlog,faAddressBook } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {

    return (
        <div>
            
            
            <div className="navigationBar">
                <ul>
                    <li><a href="#home"><FontAwesomeIcon icon={faHome} /><span>Home</span></a></li>
                    <li><a href="#about"><FontAwesomeIcon icon={faAddressCard} /><span>About</span></a></li>
                    <li><a href="#skill"><FontAwesomeIcon icon={faCode} /><span>Skill</span></a></li>
                    <li><a href="#project"><FontAwesomeIcon icon={faTasks} /><span>Project</span></a></li>
                    <li><a href="#resume"><FontAwesomeIcon icon={faFile} /><span>Resume</span></a></li>
                    <li><a href="#blog"><FontAwesomeIcon icon={faBlog} /><span>Blog</span></a></li>
                    <li><a href="#contact"><FontAwesomeIcon icon={faAddressBook} /><span>Contact</span></a></li>
                </ul>

            </div>

            <button className="btn btn-brand fw-bold fixed-bottom ms-auto mb-5 " style={{ marginRight: '75px' }}><a href="#home"><FontAwesomeIcon style={{ color: 'white', width: '30px', fontSize: '30px' }} icon={faAngleUp} /></a></button>
        </div>


    );
};

export default Navbar;





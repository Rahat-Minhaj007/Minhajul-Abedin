import React from 'react';
import ParticlesBackground from '../../ParticlesBackground';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';


const Header = () => {
    return (
        <div id='home' className='header-container'>

            <div id='header'>
                <Navbar ></Navbar>
                <HeaderMain></HeaderMain>
            </div>
            <div>
                <ParticlesBackground id='particle'></ParticlesBackground>
            </div>
        </div>
    );
};

export default Header;
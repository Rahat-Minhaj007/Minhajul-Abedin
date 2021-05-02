import React from 'react';
import ParticlesBackground from '../../ParticlesBackground';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';


const Header = () => {
    return (
        <div id='home' className='header-container'>
          
            <Navbar ></Navbar>
            <HeaderMain></HeaderMain>
            {/* <ParticlesBackground></ParticlesBackground> */}
        </div>
    );
};

export default Header;
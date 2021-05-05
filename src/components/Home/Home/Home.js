import React, { useEffect } from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Project from '../Project/Project';
import Resume from '../Resume/Resume';
import Skill from '../Skill/Skill';
import './Home.css';


const Home = () => {
   
    
    
    return (
        <div>
            <Header></Header>
            <About></About>
            <Skill></Skill>
            <Resume></Resume>
            <Project></Project>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;
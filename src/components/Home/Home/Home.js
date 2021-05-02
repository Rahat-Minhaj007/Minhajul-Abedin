import React from 'react';
import About from '../About/About';
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
        </div>
    );
};

export default Home;
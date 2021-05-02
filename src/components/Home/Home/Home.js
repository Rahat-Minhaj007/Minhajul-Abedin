import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Resume from '../Resume/Resume';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Skill></Skill>
            <Resume></Resume>
        </div>
    );
};

export default Home;
import React, { useEffect } from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Project from '../Project/Project';
import Resume from '../Resume/Resume';
import Skill from '../Skill/Skill';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';


const Home = () => {

    useEffect(() =>{
        AOS.init({duration: 2000});
        AOS.refresh();
      },[])  
   
    return (
        <div>
            <Header></Header>
            <About></About>
            <Skill></Skill>
            <Project></Project>
            <Resume></Resume>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;
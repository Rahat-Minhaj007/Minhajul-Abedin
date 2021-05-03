import React from 'react';
import Bounce from 'react-reveal/Bounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
    return (
        <section id='blog' className="project-container container-fluid  py-5  mt-5">
        <Bounce left>
            <h2 className="text-uppercase text-center "><span style={{ color: "#51a4a1" }}><FontAwesomeIcon style={{ color: '#51a4a1', width: '30px', fontSize: '30px' }} icon={faBlog} /> B</span>log</h2>
        </Bounce>

        <div className="row d-flex justify-content-center  mt-5 py-5" style={{ color: 'black', fontSize: "20px", fontFamily: 'roboto' }}>
            <h3 className="text-center">comming Soon ...</h3>
          
        </div>

       

    </section>
    );
};

export default Blog;
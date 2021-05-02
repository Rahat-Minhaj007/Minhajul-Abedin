import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import Bounce from 'react-reveal/Bounce';

const Project = () => {
    //   const projectData = [
    //     {
    //         name: 'E-SCHOOL',
    //         img: 
    //     },
    //     {
    //         name: 'BOOK-LAND',
    //         img: 
    //     },
    //     {
    //         name: 'RIDDER-MAMA',
    //         img:   
    //     }
    // ]
    return (
        <section id='project' className="project-container container-fluid py-5  mt-5">
            <Bounce right>
                <h2 className="text-uppercase text-center "><span style={{ color: "#51a4a1" }}><FontAwesomeIcon style={{ color: '#51a4a1', width: '30px', fontSize: '30px' }} icon={faTasks} /> P</span>rojects</h2>
            </Bounce>

            <div className="row d-flex justify-content-center mt-5 py-5" style={{ color: 'whiteSmoke', fontSize: "20px", fontFamily: 'roboto' }}>
               
            </div>

        </section>
    );
};

export default Project;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import eSchool from '../../../images/school.png';
import eCommerce from '../../../images/commerce.png';
import rideMama from '../../../images/ride.png';
import hungry from '../../../images/hungry.png';
import soccer from '../../../images/soccer.png';
import book from '../../../images/book.png';
import ProjectDetail from '../ProjectDetail/ProjectDetail';


const Project = () => {
    const projectData = [
        {
            id: 1,
            name: 'E-SCHOOL',
            img: eSchool,
            tech: 'ReactJS,Bootstrap 5,React-Router,NodeJS,MongoDB,ExpressJS,Heroku,Firebase,Netlify.',
            live: 'https://e-school2.netlify.app/',
            git: 'https://github.com/Rahat-Minhaj007/e-school-client'
        },
        {
            id: 2,
            name: 'BOOK-LAND',
            img: book,
            tech: 'ReactJS,Bootstrap 5,React-Router,NodeJS,MongoDB,ExpressJS,Heroku,Firebase,Netlify.',
            live: 'https://book-land4.netlify.app/',
            git: 'https://github.com/Rahat-Minhaj007/book-land-client'
        },
        {
            id: 3,
            name: 'RIDDER-MAMA',
            img: rideMama,
            tech: 'ReactJS, React Bootstrap , React-Router , Firebase , Netlify.',
            live: 'https://ride-mama.netlify.app/',
            git: 'https://github.com/Rahat-Minhaj007/ride-mama'
        },
        {
            id: 4,
            name: 'NIKE-E-COMMERCE',
            img: eCommerce,
            tech: 'HTML5, CSS3, Bootstrap 5',
            live: 'https://rahat-minhaj007.github.io/assignment2-bootstrap/',
            git: 'https://github.com/Rahat-Minhaj007/assignment2-bootstrap'
        },
        {
            id: 5,
            name: 'SOCCEROOS',
            img: soccer,
            tech: 'React.JS,React Router,Bootstrap 5',
            live: 'https://socceroos.netlify.app/',
            git: ''
        },
        {
            id: 6,
            name: 'HUNGRY-MONSTER',
            img: hungry,
            tech: 'HTML5,CSS3,Bootstrap 5, REST API',
            live: 'https://rahat-minhaj007.github.io/Hungry-Monster-assignment5/food.html?fbclid=IwAR0wBGmmlasS49J-B2mxQRa3ZTYUKW9GdM-P386llGDUjdAj5w4BzxNMnSM',
            git: 'https://github.com/Rahat-Minhaj007/Hungry-Monster-assignment5'
        },

    ]


    return (
        <section id='project' className="project-container container  py-5  mt-5">

            <div data-aos="fade-right">
                <h2 className="text-uppercase text-center " style={{ fontFamily: 'poppins' }}><span style={{ color: "#76c96e" }}><FontAwesomeIcon style={{ color: '#76c96e', width: '30px', fontSize: '30px' }} icon={faTasks} /> P</span>rojects</h2>
            </div>


            <div className="row d-flex justify-content-center  mt-5 py-5" style={{ color: 'black', fontSize: "20px", fontFamily: 'roboto' }}>
                {
                    projectData.map(pr => <ProjectDetail project={pr} key={pr.id}></ProjectDetail>)
                }
            </div>

        </section>
    );
};

export default Project;
import React from 'react';
import './ProjectDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from '@fortawesome/free-solid-svg-icons';

const ProjectDetail = (props) => {
    const { img, name, tech, live, git } = props.project
    return (

        <div className='col-md-6 mb-5  project-card' data-aos="zoom-in">
            <div class="card mb-3 pro" style={{ border: "none", width: "100%", boxShadow: "10px 10px 40px rgb(240, 240, 240)" }}>
                <img style={{ width: '100%' }} src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 style={{ color: 'black', fontFamily: 'roboto' }} class="card-title">{name}</h5>

                    <p style={{ color: 'black', fontSize: "18px", fontFamily: 'roboto', height: '5rem' }}> <strong>Technology Used</strong>:  {tech}</p>

                </div>

            </div>
            <div className='image-overlay d-flex'>
                <div>
                    <a href={live} target='_blank' rel="noreferrer"><button className='btn btn-outline-light fw-bold text-uppercase'><FontAwesomeIcon icon={faEye} /> LIVE</button></a>
                </div>
                <div>
                    <a href={git} target='_blank' rel="noreferrer"><button className='btn btn-outline-light fw-bold mt-3 text-uppercase'><FontAwesomeIcon icon={faGithub} /> GITHUB</button></a>
                </div>
            </div>
        </div>

    );
};

export default ProjectDetail;
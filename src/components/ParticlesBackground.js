import React from 'react';
import Particles from 'react-particles-js'
import particleConfig from '../components/Config/Particle-Config'

export default function ParticlesBackground(){
    return(
        <Particles params={particleConfig}></Particles>
    );
}

import React, { useEffect, useState } from 'react';
import Particles from 'react-tsparticles'
import {loadSlim} from 'tsparticles-slim'
import { useMemo, useCallback } from 'react'

const ParticlesComponent = ({ updatedColor }) => {
    const [particleColor, setParticleColor] = useState(updatedColor);
    const [linksColor, setLinksColor] = useState(updatedColor);

    // Define rootStyles here
    const rootStyles = getComputedStyle(document.documentElement);

    useEffect(() => {
        // Update particleColor and linksColor when --first-color changes
        setParticleColor(rootStyles.getPropertyValue('--first-color'));
        setLinksColor(rootStyles.getPropertyValue('--first-color'));
    }, [rootStyles]);

    const options = useMemo(() => {
        // Add debug statement here to log particleColor and linksColor
        console.log('Particle Color:', particleColor);
        console.log('Links Color:', linksColor);
        return {
            background: {
              color: "transparent", // Background color
            },
            fullScreen: {
              enable: true,
              zIndex: -1,
            },
            particles: {
              number: {
                value: 80, // Number of particles
              },
              color: {
                
                value:particleColor, // Particle color
              },
              shape: {
                type: "triangle", // Particle shape
              },
              opacity: {
                value: {min: 0.3, max: 0.5}, // Particle opacity
              },
              size: {
                value: {min: 3, max: 5}, // Particle size
              },              
              move: {
                enable: true,
                speed: {min: 1, max: 3},
              },
              links: {
                enable: true, // Enable linking between particles
                distance: 100, // Maximum distance for linking
                color: linksColor, // Color of the links
                opacity: 0.5, // Opacity of the links
                width: 1, // Width of the links
              },

            },
          };
        }, [particleColor, linksColor]);
        
        

    const particlesInit = useCallback((engine) => {
        loadSlim(engine)
      },
      [],
    )

    return <Particles init={particlesInit} options={options} />
    
}

export default ParticlesComponent
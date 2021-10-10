import Particles from "react-particles-js";
import React from "react";

function Particle() {
  return (
    <>
      <Particles
        width="100%"
        height="100vh"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1200,
              },
            },
            color: {
              value: "#610094",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
              },
              polygon: {
                nb_sides: 12,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              opacity: 0.5,
              width: 1,
              shadow: {
                enable: false,
                color: "#e74c3c",
                blur: 5,
              },
            },
            move: {
              enable: true,
              random: true,
              speed: 0.6,
              attract: {
                rotateX: 600,
                rotateY: 1200,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                speed: 50,
                size_min: 0.1,
              },
            },
            opacity: {
              value: 0.8,
              anim: {
                speed: 1,
                opacity_min: 0.1,
              },
            },
          },
        }}
      />
    </>
  );
}

export default Particle;

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

interface ParticlesBgProps {
  id: string;
}

const ParticlesBg = ({ id }: ParticlesBgProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id={id}
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.5
          },
          size: {
            value: 4,
            random: true,
            animation: {
              enable: true,
              speed: 5,
              minimumValue: 0.1,
              sync: false
            }
          },
          links: {
            enable: true,
            distance: 80,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out"
            }
          }
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              quantity: 4
            }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticlesBg;
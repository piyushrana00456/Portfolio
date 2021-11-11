import React from "react";
import styled from "styled-components";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import Particles from "react-particles-js";
import Particle from "../Components/Particle";
import Typewriter from "../Components/Type";
// import { MyComponent } from "../Components/TypeWriter";
function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        {/* <Particles /> */}
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span>Piyush Rana</span>
        </h1>
        <h2 className="typewriter">
          {" "}
          <Typewriter />
          {/* <MyComponent /> */}
        </h2>
        <div className="icons">
          <a
            href="https://github.com/piyushrana00456"
            className="icon i-github"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/piyush-rana-098121154/"
            className="icon i-linkedIn"
          >
            <LinkedInIcon />
          </a>
          {/* <a
            href="https://www.facebook.com/arnav.roy.984"
            className="icon i-facebook"
          >
            <FacebookIcon />
          </a> */}
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-linkedIn {
        &:hover {
          border: 2px solid #0a66c2;
          color: #0a66c2;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;

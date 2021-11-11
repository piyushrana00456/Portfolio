import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ProgressBar from "./ProgressBar";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar img={"./html.png"} title={"HTML"} />
          <ProgressBar img={"./css.png"} title={"CSS"} />
          <ProgressBar img={"./js.png"} title={"Javascript"} />

          <ProgressBar img={"./react.png"} title={"React"} />

          <ProgressBar img={"./redux.png"} title={"Redux"} />

          <ProgressBar img={"./nodeJs.png"} title={"Node.Js"} />
          <ProgressBar img={"./mongo.png"} title={"MongoDB"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;

    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default Skills;

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
          <ProgressBar img={"./html.png"} />
          <ProgressBar img={"./css.png"} />
          <ProgressBar img={"./js.png"} />

          <ProgressBar img={"./react.png"} />

          <ProgressBar img={"./redux.png"} />

          <ProgressBar img={"./nodeJs.png"} />
          <ProgressBar img={"./mongo.png"} />
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
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;

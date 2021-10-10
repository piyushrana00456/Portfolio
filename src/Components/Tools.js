import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ToolBar from "./ToolBar";

function Tools() {
  return (
    <SkillsStyled>
      <Title title={"Tools"} span={"tools"} />
      <InnerLayout>
        <div className="skills">
          <ToolBar img={"./html.png"} />
          <ToolBar img={"./css.png"} />
          <ToolBar img={"./js.png"} />
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

export default Tools;

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
          <ToolBar img={"./vs.png"} title={"Vs Code"} />
          <ToolBar img={"./postman.png"} title={"Postman"} />
          <ToolBar img={"./github.png"} title={"GitHub"} />
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
      align-items: center;
      justify-content: center;
      text-align: center;
      img {
        width: 30%;
      }
    }
  }
`;

export default Tools;

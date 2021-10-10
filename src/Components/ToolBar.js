import React from "react";
import styled from "styled-components";

function ToolBar({ title, img }) {
  return (
    <ProgressBarStyled>
      <img src={img} alt="" />
    </ProgressBarStyled>
  );
}

const ProgressBarStyled = styled.div`
  width: 100%;
  img {
    width: 40%;
  }
`;

export default ToolBar;

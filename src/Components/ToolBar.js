import React from "react";
import styled from "styled-components";

function ToolBar({ title, img }) {
  return (
    <ProgressBarStyled>
      <img src={img} alt="" />
      <h3>{title}</h3>
    </ProgressBarStyled>
  );
}

const ProgressBarStyled = styled.div`
  width: 70%;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    width: 40%;
    align-items: center;
    justify-content: center;
  }
`;

export default ToolBar;

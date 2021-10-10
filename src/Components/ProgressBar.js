import React from "react";
import styled from "styled-components";

function ProgressBar({ title, img }) {
  return (
    <ProgressBarStyled>
      <img src={img} alt="" />
    </ProgressBarStyled>
  );
}

const ProgressBarStyled = styled.div`
  width: 100%;
  img {
    width: 50%;
  }
`;

export default ProgressBar;

import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
function Type() {
  return (
    <Typewriter
      options={{
        strings: ["A Web Developer", "A Problem Solver"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
export default Type;

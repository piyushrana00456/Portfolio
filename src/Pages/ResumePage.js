import React from "react";
import Skills from "../Components/Skills";
import { MainLayout } from "../styles/Layouts";
import Resume from "../Components/Resume";
import Tools from "../Components/Tools";

function ResumePage() {
  return (
    <MainLayout>
      <Skills />
      <Tools />
      <Resume />
    </MainLayout>
  );
}

export default ResumePage;

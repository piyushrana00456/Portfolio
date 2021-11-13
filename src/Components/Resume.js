import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Internship"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2018 - 2018"}
            title={"NTPC, Muzaffarpur"}
            text={
              "Learned about the working of thermal power plant specifically the functions inside a boiler. I learned  how the water from the storage or ground water to superheated steam are generated and transmits to the turbine for generating electricity"
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2021 - Present"}
            title={"Full Stack Developer"}
            subTitle={"Masai School, Banglore"}
            text={`Learning Full Stack Developement and 
             Communication skills `}
          />
          <ResumeItem
            year={"2015 - 2019"}
            title={"Mechanical Engineering"}
            subTitle={"KCCITM, Greater Noida"}
          />
          <ResumeItem
            year={"2012 - 2015"}
            title={"Intermediate"}
            subTitle={"ChandraSheal Vidyapeeth"}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;

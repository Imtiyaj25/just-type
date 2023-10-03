import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Section from "../shared/section";
import TechIcons from "../../images/tech-icons.png";
import CallToAction from "../../components/shared/CallToAction";
import "./style.scss";

const Skills = () => {
  return (
    <Section background="dark" id="skills">
      <div className="skills-content-wrapper">
        <div className="left-col">
          <img src={TechIcons} alt="" />
        </div>
        <div className="right-col">
          <h2>Skills</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            tempore, ad aliquam laudantium animi, maiores, hic sunt corrupti
            ipsam nisi cupiditate praesentium sint quis modi excepturi neque
            magnam tempora cumque!
          </p>
          <CallToAction text="Download CV" icon={<AiOutlineCloudDownload/>}/>
        </div>
      </div>
    </Section>
  );
};

export default Skills;

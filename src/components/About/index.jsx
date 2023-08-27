import React from "react";
import classNames from "./about.module.scss";

const About = () => {
  return (
    <div className={classNames.about} id="about">
      <div className={classNames.aboutContainer}>
        <div className={classNames.leftContainer}>
          <div className={classNames.content}>
            <div>Passion, </div>
            <div>Creativity, and</div>
            <div>Design :</div>
            <div>A Personal</div>
            <div>Introduction</div>
          </div>
          <div className={classNames.whiteCover}></div>
        </div>
        <div className={classNames.rightContainer}>
          <div className={classNames.title}>About Me</div>
          <div className={classNames.desc}>
            I am a passionate UI/UX designer with a year of experience in the
            cybersecurity domain. My deep-rooted passion led me to dive into the
            world of UI/UX design, where I've honed my skills and obtained
            relevant certifications. Applying my knowledge to real-time
            projects, I strive to craft better designs with seamless user
            experiences. I am a creative and dedicated professional, always
            willing to learn and collaborate. With strong attention to detail, I
            put my full effort into every project to deliver outstanding
            results. I am excited to continue my journey, creating impactful
            designs that captivate and delight users.
          </div>
          <div className={classNames.btn}>Learn more</div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import classNames from "./about.module.scss";

const About = () => {
  return (
    <div className={classNames.about}>
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
        <div className={classNames.rightContainer}></div>
      </div>
    </div>
  );
};

export default About;

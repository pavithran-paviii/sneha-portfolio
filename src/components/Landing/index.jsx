import React from "react";
import classNames from "./landing.module.scss";

const Landing = () => {
  return (
    <div className={classNames.landing}>
      <div className={classNames.contentContainer}>
        <div className={classNames.title}>
          Hey there! <span>I am Sneha M</span> <br />
          passionated UX/UI <br />
          Designer
        </div>
        <div className={classNames.desc}>
          welcome to my design world!Get ready to explore captivating designs
          and seamless experience. Join me on this inspiring design journey and
          be prepared to get amazed
        </div>
        <div className={classNames.buttonsContainer}>
          <div>Resume</div>
          <div>View Projects</div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

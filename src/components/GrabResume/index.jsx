import React from "react";
import classNames from "./grabresume.module.scss";

import backgroundImage from "../../assets/images/background/mads-schmidt-rasmussen-6YmzwamGzCg-unsplash.jpg";

const GrabResume = () => {
  return (
    <div className={classNames.grabResume}>
      <div className={classNames.container}>
        <div className={classNames.title}>
          Get to Know Me Better: Grab My <span>Resume</span> Now
        </div>
        <div className={classNames.btn}>Download my resume</div>
      </div>

      <img src={backgroundImage} alt="backgroundImage" />
    </div>
  );
};

export default GrabResume;

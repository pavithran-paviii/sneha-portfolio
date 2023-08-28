import React from "react";
import classNames from "./grabresume.module.scss";

import backgroundImage from "../../assets/images/background/mads-schmidt-rasmussen-6YmzwamGzCg-unsplash.jpg";

const GrabResume = () => {
  return (
    <div className={classNames.grabResume}>
      <div className={classNames.container}>
        <div className={classNames.title}>
          Get to Know Me Better: Grab My{" "}
          <span
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1Zql2NZWBsDr5pGdp7MLsNvJbHfLCu0Nk/view?usp=drive_link",
                "_blank"
              )
            }
          >
            Resume
          </span>{" "}
          Now
        </div>
        <div
          className={classNames.btn}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1Zql2NZWBsDr5pGdp7MLsNvJbHfLCu0Nk/view?usp=drive_link",
              "_blank"
            )
          }
        >
          Download my resume
        </div>
      </div>

      <img src={backgroundImage} alt="backgroundImage" />
    </div>
  );
};

export default GrabResume;

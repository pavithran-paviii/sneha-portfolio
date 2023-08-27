import React from "react";
import classNames from "./vision.module.scss";

//assets

import visionIcon from "../../assets/images/icons/vision.svg";
import missionIcon from "../../assets/images/icons/mission.svg";

const Vision = () => {
  return (
    <div className={classNames.vision}>
      <div className={classNames.contentContainer}>
        <div className={classNames.title}>
          Journey into My Vision and Mission: Discover the Essence of
          Transformative UI/UX Design
        </div>
        <div className={classNames.cardsParent}>
          <div className={classNames.eachCard}>
            <img src={visionIcon} alt="visionIcon" />
            <div className={classNames.title}>Vision</div>
            <div className={classNames.desc}>
              To be a visionary UI/UX designer driving exceptional user
              experiences and business success through transformative,
              user-centered design solutions that inspire and shape the digital
              landscape.
            </div>
          </div>
          <div className={classNames.eachCard}>
            <img src={missionIcon} alt="missionIcon" />
            <div className={classNames.title}>Mission</div>
            <div className={classNames.desc}>
              To create exceptional, user-centered UI/UX design solutions that
              drive business success, while continuously learning, improving,
              and helping others in the design community.
            </div>
          </div>
          <Triangle />
        </div>
      </div>
    </div>
  );
};

export default Vision;

const Triangle = () => {
  return (
    <div className={classNames.triangle}>
      <svg
        width="1033"
        height="739"
        viewBox="0 0 1033 739"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M500.199 8.9299C508.173 -2.28592 524.828 -2.28589 532.801 8.92993L1028.81 706.662C1038.23 719.904 1028.76 738.25 1012.51 738.25H20.4858C4.23895 738.25 -5.2284 719.904 4.18515 706.662L500.199 8.9299Z"
          fill="var(--pale-pink)"
        />
      </svg>
    </div>
  );
};

import React from "react";
import classNames from "./gallery.module.scss";

//assets

import firstIcon from "../../assets/images/gallerygrid/1.svg";
import secondIcon from "../../assets/images/gallerygrid/2.svg";
import thirdIcon from "../../assets/images/gallerygrid/3.svg";
import fourthIcon from "../../assets/images/gallerygrid/4.svg";
import fifthIcon from "../../assets/images/gallerygrid/5.svg";
import sixthIcon from "../../assets/images/gallerygrid/6.svg";
import seventhIcon from "../../assets/images/gallerygrid/7.svg";
import eighthIcon from "../../assets/images/gallerygrid/8.svg";
import ninethIcon from "../../assets/images/gallerygrid/9.svg";
import tenthIcon from "../../assets/images/gallerygrid/10.svg";
import eleventhIcon from "../../assets/images/gallerygrid/11.svg";
import twelvethIcon from "../../assets/images/gallerygrid/12.svg";
import thirteenthIcon from "../../assets/images/gallerygrid/13.svg";
import fourteenthIcon from "../../assets/images/gallerygrid/14.svg";
import fifteenthIcon from "../../assets/images/gallerygrid/15.svg";
import sixteenthIcon from "../../assets/images/gallerygrid/16.svg";

const Gallery = () => {
  return (
    <div className={classNames.gallery} id="gallery">
      <div className={classNames.content}>
        <div className={classNames.title}>
          Journey into Visual Delights: Immerse Yourself in the Gallery
        </div>
        <div className={classNames.galleryGrid}>
          <img src={firstIcon} alt="firstIcon" />
          <img src={secondIcon} alt="secondIcon" />
          <img src={thirdIcon} alt="thirdIcon" />
          <img src={fourthIcon} alt="fourthIcon" />
          <img src={fifthIcon} alt="fifthIcon" />
          <img src={sixthIcon} alt="sixthIcon" />
          <img src={seventhIcon} alt="seventhIcon" />
          <img src={eighthIcon} alt="eighthIcon" />
          <img src={ninethIcon} alt="ninethIcon" />
          <img src={tenthIcon} alt="tenthIcon" />
          <img src={eleventhIcon} alt="eleventhIcon" />
          <img src={twelvethIcon} alt="twelvethIcon" />
          <img src={thirteenthIcon} alt="thirteenthIcon" />
          <img src={fourteenthIcon} alt="fourteenthIcon" />
          <img src={fifteenthIcon} alt="fifteenthIcon" />
          <img src={sixteenthIcon} alt="sixteenthIcon" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

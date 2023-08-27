import React from "react";
import classNames from "./footer.module.scss";

import { BsLinkedin, BsInstagram, BsMedium } from "react-icons/bs";
import { FaBehanceSquare, FaTwitterSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className={classNames.footer} id="contact">
      <div className={classNames.container}>
        <div className={classNames.title}>
          Indulge in My Creative World: Follow Me for a Sneak Peek into My
          Diverse Collection of Works
        </div>
        <div className={classNames.socialHandles}>
          <BsLinkedin />
          <FaBehanceSquare />
          <FaTwitterSquare />
          <BsInstagram />
          <BsMedium />
        </div>
        <div className={classNames.mail}>
          <BiLogoGmail />
          snehauxdesigner@gmail.com
        </div>
      </div>
      <div className={classNames.box}></div>
    </div>
  );
};

export default Footer;

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
          <BsLinkedin
            onClick={() =>
              window.open("https://www.linkedin.com/in/sneha14m/", "_blank")
            }
          />
          <FaBehanceSquare
            onClick={() =>
              window.open("https://www.behance.net/sneha_m14", "_blank")
            }
          />
          <FaTwitterSquare
            onClick={() =>
              window.open("https://twitter.com/Sneha_m_ux", "_blank")
            }
          />
          <BsInstagram
            onClick={() =>
              window.open("https://www.instagram.com/sne_deshine/", "_blank")
            }
          />
          <BsMedium
            onClick={() =>
              window.open("https://medium.com/@snehaMdesigner", "_blank")
            }
          />
        </div>
        <div
          className={classNames.mail}
          onClick={() =>
            window?.open("mailto:snehauxdesigner@gmail.com", "_blank")
          }
        >
          <BiLogoGmail />
          snehauxdesigner@gmail.com
        </div>
      </div>
      <div className={classNames.box}></div>
    </div>
  );
};

export default Footer;

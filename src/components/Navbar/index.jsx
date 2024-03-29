import React, { useState } from "react";
import classNames from "./navbar.module.scss";

//library
import { motion } from "framer-motion";

const Navbar = () => {
  const [selectedSection, setSelectedSection] = useState("Home");
  return (
    <div className={classNames.navbar}>
      <div className={classNames.logo}>
        <LogoPath />
      </div>
      <div className={classNames.sectionOptions}>
        <a
          href="/#home"
          className={selectedSection === "Home" && classNames.selectedSection}
          onClick={() => setSelectedSection("Home")}
        >
          Home
        </a>
        <a
          href="/#about"
          className={selectedSection === "About" && classNames.selectedSection}
          onClick={() => setSelectedSection("About")}
        >
          About
        </a>
        <a
          href="/#projects"
          className={
            selectedSection === "Projects" && classNames.selectedSection
          }
          onClick={() => setSelectedSection("Projects")}
        >
          Projects
        </a>
        <a
          href="/#gallery"
          className={
            selectedSection === "Gallery" && classNames.selectedSection
          }
          onClick={() => setSelectedSection("Gallery")}
        >
          Gallery
        </a>
        <a
          href="/#contact"
          className={
            selectedSection === "Contact" && classNames.selectedSection
          }
          onClick={() => setSelectedSection("Contact")}
        >
          Contact
        </a>
      </div>
      <div className={classNames.hireButton}>Hire Me</div>
    </div>
  );
};

export default Navbar;

const LogoPath = () => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(105, 48, 109,0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(105, 48, 109,1)",
    },
  };

  return (
    <motion.svg
      width="106"
      height="84"
      viewBox="0 0 106 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M69.7737 47.5H0.0560489C1.09006 65.8994 16.3015 80.5 34.9149 80.5C53.5282 80.5 68.7397 65.8994 69.7737 47.5ZM69.8297 45.5C69.8297 26.17 54.1978 10.5 34.9149 10.5C15.6319 10.5 0 26.17 0 45.5H69.8297Z"
        //   fill="#69306D"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 1, ease: "easeInOut" },
          fill: { duration: 1, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        d="M61.4134 23.604V24.844C60.0907 24.8853 59.0987 25.0507 58.4374 25.34C57.7761 25.588 57.3214 26.084 57.0734 26.828C56.8667 27.5307 56.7634 28.6467 56.7634 30.176V60.928C56.7634 62.416 56.8667 63.532 57.0734 64.276C57.3214 65.02 57.7761 65.516 58.4374 65.764C59.0987 66.012 60.0907 66.1773 61.4134 66.26V67.5C60.2561 67.4173 58.7887 67.376 57.0114 67.376C55.2754 67.3347 53.4981 67.314 51.6794 67.314C49.6954 67.314 47.8354 67.3347 46.0994 67.376C44.3634 67.376 42.9581 67.4173 41.8834 67.5V66.26C43.2887 66.1773 44.3427 66.012 45.0454 65.764C45.7894 65.516 46.2854 65.02 46.5334 64.276C46.7814 63.532 46.9054 62.416 46.9054 60.928V27.386H47.3394L31.9634 67.562H30.9714L14.2314 27.634V57.332C14.2314 59.6053 14.3554 61.362 14.6034 62.602C14.8514 63.8007 15.3887 64.6687 16.2154 65.206C17.0834 65.702 18.4267 66.0533 20.2454 66.26V67.5C19.4601 67.4173 18.4267 67.376 17.1454 67.376C15.8641 67.3347 14.6654 67.314 13.5494 67.314C12.5987 67.314 11.6274 67.3347 10.6354 67.376C9.64341 67.376 8.81675 67.4173 8.15541 67.5V66.26C9.47808 66.0533 10.4701 65.702 11.1314 65.206C11.7927 64.71 12.2267 63.904 12.4334 62.788C12.6814 61.6307 12.8054 60.06 12.8054 58.076V30.176C12.8054 28.6467 12.6814 27.5307 12.4334 26.828C12.2267 26.084 11.7721 25.588 11.0694 25.34C10.4081 25.0507 9.43675 24.8853 8.15541 24.844V23.604C8.81675 23.6453 9.64341 23.6867 10.6354 23.728C11.6274 23.7693 12.5987 23.79 13.5494 23.79C15.3267 23.79 17.0627 23.7693 18.7574 23.728C20.4934 23.6867 22.0227 23.6453 23.3454 23.604L36.3654 55.038L34.8154 56.464L47.2774 23.79C47.9801 23.79 48.7034 23.79 49.4474 23.79C50.1914 23.79 50.9354 23.79 51.6794 23.79C53.4981 23.79 55.2754 23.7693 57.0114 23.728C58.7887 23.6867 60.2561 23.6453 61.4134 23.604Z"
        fill="#FFFBFA"
      />
      <motion.path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M94.7011 23.306C93.3784 22.7687 91.4978 22.5 89.0591 22.5C86.6618 22.5 84.3884 22.9134 82.2391 23.74C80.1311 24.5254 78.4158 25.7654 77.0931 27.46C75.8118 29.1134 75.1711 31.242 75.1711 33.846C75.1711 36.1194 75.6671 38.0827 76.6591 39.736C77.6924 41.3894 79.0564 42.8567 80.7511 44.138C81.3515 44.592 81.9675 45.046 82.5991 45.5H99.4447C97.9906 44.3433 96.368 43.1867 94.5771 42.03C92.3038 40.4594 90.3611 39.116 88.7491 38C87.1784 36.884 85.9798 35.7474 85.1531 34.59C84.3264 33.3914 83.9131 31.9654 83.9131 30.312C83.9131 28.328 84.5538 26.778 85.8351 25.662C87.1164 24.546 88.7491 23.988 90.7331 23.988C92.9238 23.988 94.7631 24.6494 96.2511 25.972C97.7804 27.2534 98.9584 28.9067 99.7851 30.932C100.612 32.9574 101.108 35.0447 101.273 37.194H102.699V30.188C102.74 28.4107 102.782 26.9847 102.823 25.91C102.906 24.794 102.968 23.8434 103.009 23.058H101.583C101.459 23.9674 101.294 24.6494 101.087 25.104C100.922 25.5587 100.632 25.786 100.219 25.786C99.9298 25.786 99.6198 25.724 99.2891 25.6C98.9998 25.4347 98.6071 25.2074 98.1111 24.918C97.1604 24.3394 96.0238 23.802 94.7011 23.306ZM101.654 47.5H85.4821C85.7218 47.6607 85.9635 47.8214 86.2071 47.982C88.0258 49.1394 89.6171 50.276 90.9811 51.392C92.3864 52.508 93.4818 53.7067 94.2671 54.988C95.0938 56.2694 95.5071 57.778 95.5071 59.514C95.5071 61.0434 95.1558 62.3247 94.4531 63.358C93.7504 64.3914 92.8204 65.1767 91.6631 65.714C90.5471 66.21 89.2658 66.458 87.8191 66.458C85.1738 66.458 83.0451 65.7347 81.4331 64.288C79.8624 62.8414 78.6844 60.94 77.8991 58.584C77.1551 56.1867 76.7004 53.624 76.5351 50.896H75.1091C75.1091 54.1614 75.0884 56.8687 75.0471 59.018C75.0471 61.126 75.0264 62.8414 74.9851 64.164C74.9851 65.4867 74.9438 66.644 74.8611 67.636H76.2871C76.4111 66.7267 76.5558 66.0447 76.7211 65.59C76.9278 65.1354 77.2378 64.908 77.6511 64.908C78.1471 64.908 78.8498 65.1974 79.7591 65.776C80.7924 66.3134 82.0738 66.83 83.6031 67.326C85.1324 67.822 87.1784 68.07 89.7411 68.07C92.5104 68.07 95.0524 67.636 97.3671 66.768C99.6818 65.8587 101.542 64.5154 102.947 62.738C104.394 60.9607 105.117 58.708 105.117 55.98C105.117 53.748 104.642 51.826 103.691 50.214C103.123 49.2503 102.444 48.3456 101.654 47.5Z"
        //   fill="#69306D"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 1, ease: "easeInOut" },
          fill: { duration: 1, ease: [1, 0, 0.8, 1] },
        }}
      />
    </motion.svg>
  );
};

import React from "react";
import classNames from "./hireme.module.scss";

const HireMe = () => {
  return (
    <div className={classNames.hireMe}>
      <div className={classNames.container}>
        <div className={classNames.title}>
          Supercharge Your Team's Performance: Hire Me and Witness the
          Transformation!
        </div>
        <div className={classNames.btn}>Hire me</div>
      </div>
    </div>
  );
};

export default HireMe;

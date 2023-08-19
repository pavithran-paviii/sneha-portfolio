import React from "react";
import classNames from "./home.module.scss";

import Landing from "../../components/Landing";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div className={classNames.home}>
      <Navbar />
      <Landing />
    </div>
  );
};

export default Home;

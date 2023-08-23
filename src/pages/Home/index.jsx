import React from "react";
import classNames from "./home.module.scss";

import Landing from "../../components/Landing";
import Navbar from "../../components/Navbar";
import About from "../../components/About";

const Home = () => {
  return (
    <div className={classNames.home}>
      <Navbar />
      <Landing />
      <About />
    </div>
  );
};

export default Home;

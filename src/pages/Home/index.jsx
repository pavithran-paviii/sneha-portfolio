import React from "react";
import classNames from "./home.module.scss";

import Landing from "../../components/Landing";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import GrabResume from "../../components/GrabResume";
import Projects from "../../components/Projects";

const Home = () => {
  return (
    <div className={classNames.home}>
      <Navbar />
      <Landing />
      <About />
      <GrabResume />
      <Projects />
    </div>
  );
};

export default Home;

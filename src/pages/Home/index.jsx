import React from "react";
import classNames from "./home.module.scss";

import Landing from "../../components/Landing";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import GrabResume from "../../components/GrabResume";
import Projects from "../../components/Projects";
import Vision from "../../components/Vision";
// import Gallery from "../../components/Gallery";
import HireMe from "../../components/HireMe";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className={classNames.home}>
      <Navbar />
      <Landing />
      <About />
      <GrabResume />
      <Projects />
      <Vision />
      {/* <Gallery /> */}
      <HireMe />
      <Footer />
    </div>
  );
};

export default Home;

import React, { useRef, useState } from "react";
import classNames from "./projects.module.scss";

//assets

import twitterImage from "../../assets/images/projects/twitter.jpg";
import nuptialsImage from "../../assets/images/projects/nuptials.jpg";
import medicareImage from "../../assets/images/projects/medicare.jpg";

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Projects = () => {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allProjects = [
    {
      title: "Twitter UI Evaluation",
      desc: "A heuristic approach Case study",
      type: "Individual Project",
      image: twitterImage,
    },
    {
      title: "Outdoor Nuptials",
      desc: "outdoor wedding ceremony preview app",
      type: "Individual Project",
      image: nuptialsImage,
    },
    {
      title: "Medicare",
      desc: "Enhanced Medical application",
      type: "Team project",
      image: medicareImage,
    },
  ];

  const scrollToProject = (index, type) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const eachProjectWidth = container.clientWidth;
      container.scrollTo({
        left:
          type === "prev"
            ? eachProjectWidth * index
            : eachProjectWidth * index + 100,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const scrollToPreviousProject = () => {
    const previousIndex = Math.max(currentIndex - 1, 0);
    scrollToProject(previousIndex, "prev");
  };

  const scrollToNextProject = () => {
    const nextIndex = Math.min(currentIndex + 1, allProjects.length - 1);
    scrollToProject(nextIndex, "next");
  };

  return (
    <div className={classNames.projects} id="projects">
      <div className={classNames.title}>
        Designs Crafted with Passion: Dive into My World of Design Collections
      </div>
      <div className={classNames.allProjects} ref={scrollContainerRef}>
        {allProjects?.map(({ title, desc, type, image }, index) => {
          return (
            <div className={classNames.eachProject} key={title + index}>
              <div className={classNames.content}>
                <div className={classNames.title}>{title}</div>
                <div className={classNames.desc}>{desc}</div>
                <div className={classNames.type}>{type}</div>
                <div className={classNames.viewBtn}>View case study</div>
              </div>
              <img src={image} alt={title} />
            </div>
          );
        })}
      </div>
      <div className={classNames.navigationButtons}>
        <button
          className={classNames.prevButton}
          onClick={scrollToPreviousProject}
          disabled={currentIndex === 0}
          style={{ opacity: currentIndex === 0 ? "0.6" : "" }}
        >
          <MdNavigateBefore />
        </button>
        <button
          className={classNames.nextButton}
          onClick={scrollToNextProject}
          disabled={currentIndex === allProjects.length - 1}
          style={{
            opacity: currentIndex === allProjects.length - 1 ? "0.6" : "",
          }}
        >
          <MdNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default Projects;

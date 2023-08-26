import React, { useEffect, useRef, useState } from "react";
import classNames from "./projects.module.scss";

//assets

import twitterImage from "../../assets/images/projects/twitter.jpg";
import nuptialsImage from "../../assets/images/projects/nuptials.jpg";
import medicareImage from "../../assets/images/projects/medicare.jpg";

const Projects = () => {
  const scrollContainerRef = useRef(null);
  const [lastScrollLeft, setLastScrollLeft] = useState(0);

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

  useEffect(() => {
    const handleMouseWheel = (e) => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        // Prevent default vertical scrolling
        e.preventDefault();

        // Calculate the new horizontal scroll position
        const newScrollLeft = Math.max(
          0,
          Math.min(maxScrollLeft, container.scrollLeft + e.deltaY)
        );

        // Smoothly scroll to the new position
        container.scrollTo({
          left: newScrollLeft,
          behavior: "smooth",
        });
      }
    };

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("wheel", handleMouseWheel, {
        passive: false,
      });
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener(
          "wheel",
          handleMouseWheel
        );
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseWheel = (e) => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        // Prevent default vertical scrolling
        e.preventDefault();

        // Calculate the new horizontal scroll position
        const newScrollLeft = Math.max(
          0,
          Math.min(maxScrollLeft, container.scrollLeft + e.deltaY)
        );
        container.scrollLeft = newScrollLeft;
      }
    };

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("wheel", handleMouseWheel, {
        passive: false,
      });
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener(
          "wheel",
          handleMouseWheel
        );
      }
    };
  }, []);

  return (
    <div className={classNames.projects}>
      <div className={classNames.title}>
        Designs Crafted with Passion: Dive into My World of Design Collections
      </div>
      <div className={classNames.allProjects} ref={scrollContainerRef}>
        {allProjects?.map(({ title, desc, type, image }, index) => {
          return (
            <div
              className={classNames.eachProject}
              key={title + index}
              // onClick={(event) =>
              //   console.dir(
              //     event?.target,
              //     "each project",
              //     event?.target?.offsetWidth
              //   )
              // }
            >
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
    </div>
  );
};

export default Projects;

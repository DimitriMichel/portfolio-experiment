import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import tideGif from "../images/tide.gif";
import plutoGif from "../images/pluto.gif";
import bakeryGif from "../images/bakery.gif";
import Project from "./Project";
//Animation Config
const opacityAnimation = {
  static: { opacity: 0, y: 10 },
  visible: {
    y: -3,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

//Project Info Text
const tideInfo = "A small social media application.";
const plutoInfo = "Finances of all members of congress";
const bakerInfo = "A static site for a local bakery";

const Projects = () => {
  //Play Animation Once In Viewport
  const { ref, inView } = useInView({
    triggerOnce: true,

    threshold: 0,
  });
  return (
    <div className="box--blue box__projects">
      <div
        className="box__content__container
      yellow--pattern "
      >
        <div className="projects__content ">
          <div className="box__header">
            <motion.div ref={ref} className="box--title">
              Projects
            </motion.div>
            {inView ? (
              <motion.div
                variants={opacityAnimation}
                initial="static"
                animate="visible"
                transition="transition"
                className="box--title box__emoji"
              >
                <span role="img" aria-label="Construction Worker Emoji">
                  👷🏾‍♂️
                </span>
              </motion.div>
            ) : (
              <div></div>
            )}
          </div>
          {inView ? (
            <motion.div animate={{ opacity: 1 }} className="project__content">
              <Project
                imageSource={tideGif}
                alt="social media site"
                projectInfo={tideInfo}
              />
              <Project
                imageSource={plutoGif}
                alt="data visualization"
                projectInfo={plutoInfo}
              />
              <Project
                imageSource={bakeryGif}
                alt="bakery static site"
                projectInfo={bakerInfo}
              />
            </motion.div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;

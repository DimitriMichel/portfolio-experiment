import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import tideVideo from "../images/tide.mp4";
import plutoVideo from "../images/pluto.mp4";
import bakeryVideo from "../images/bakery.mp4";
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
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    rootMargin: "10px",
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
                👷🏾‍♂️
              </motion.div>
            ) : (
              <div></div>
            )}
          </div>

          <motion.div animate={{ opacity: 1 }} className="project__content">
            <Project videoSource={tideVideo} projectInfo={tideInfo} />
            <Project videoSource={plutoVideo} projectInfo={plutoInfo} />
            <Project videoSource={bakeryVideo} projectInfo={bakerInfo} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

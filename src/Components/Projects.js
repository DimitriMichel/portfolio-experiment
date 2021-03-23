import React from "react";
import { motion } from "framer-motion";
import tideGif from "../images/tide.gif";
import LazyLoad from "react-lazyload";
import plutoGif from "../images/pluto.gif";
import bakeryGif from "../images/bakery.gif";
import Project from "./Project";
import { useInView } from "react-intersection-observer";
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
    triggerOnce: false,
    threshold: 0,
  });
  return (
    <LazyLoad height={350}>
      <div className="box--blue box__projects">
        <div
          className="box__content__container
      yellow--pattern "
        >
          <div className="projects__content">
            <div className="box__header">
              <motion.h2 className="box--title">Projects</motion.h2>

              <motion.div
                variants={opacityAnimation}
                initial="static"
                animate="visible"
                transition="transition"
                className="box--title box__emoji"
                ref={ref}
              >
                {inView ? (
                  <span role="img" aria-label="Construction Worker Emoji">
                    👷🏾‍♂️
                  </span>
                ) : (
                  <div></div>
                )}
              </motion.div>
            </div>

            <motion.div animate={{ opacity: 1 }} className="project__content">
              <ul>
                <li>

                  <Project
                      imageSource={bakeryGif}
                      alt="bakery static site"
                      projectInfo={bakerInfo}
                      launchFrom={"https://bakery.dimitriMichel.com"}
                      github={"https://github.com/DimitriMichel/Bakery"}
                  />
                </li>
                <li>
                  <Project
                      imageSource={tideGif}
                      alt="social media site"
                      projectInfo={tideInfo}
                      launchFrom={"https://tide.dimitrimichel.com/login"}
                      github={"https://github.com/DimitriMichel/Tide"}
                  />
                </li>

                <li>
                  <Project
                      imageSource={plutoGif}
                      alt="data visualization"
                      projectInfo={plutoInfo}
                      launchFrom={"https://pluto.dimitriMichel.com"}
                      github={"https://github.com/DimitriMichel/Pluto"}
                  />
                </li>
                </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default Projects;

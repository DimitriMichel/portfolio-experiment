import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import moneyPNG from "../images/money.png";
import booksPNG from "../images/books.png";
import brainPNG from "../images/brain.png";
import BlogPost from "./BlogPost";
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

const Blog = () => {
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
                  ✍️♂️
                </span>
              </motion.div>
            ) : (
              <div></div>
            )}
          </div>
          {inView ? (
            <motion.div animate={{ opacity: 1 }} className="project__content">
              <BlogPost
                imageSource={brainPNG}
                alt="sculpture of human head"
                blogLink="www.google.com"
                blogTitle='How I Stopped Worrying'
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

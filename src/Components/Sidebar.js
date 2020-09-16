import React from "react";
import { motion } from "framer-motion";
import emojiImage from "../images/animoji.png";
import downArrow from "../images/down_arrow.svg";

//Animation Variants
const nameBackgroundVariants = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};
const nameVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
const imageVariants = {
  hidden: { y: 170 },
  show: {
    y: 0,
    opacity: [0, 1, 1, 1, 1, 1, 1, 1],
    transition: { delay: 0.8, duration: 1 },
  },
};
const yBouncingAnimation = {
  static: { y: 0 },
  floating: {
    y: [0, -17],
    transition: {
      duration: 0.6,
      ease: "easeOut",
      yoyo: Infinity,
    },
  },
};
const yLandingAnimation = {
  hidden: { y: -17, opacity: 0 },
  show: {
    y: -2,
    opacity: 1,
    transition: {
      delay:1.9,
      duration: 0.6,
    },
  },
};
const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div className="sidebar">
        <div className="sidebar__content">
          <div className="sidebar__image__container">
            <motion.img
              variants={imageVariants}
              initial="hidden"
              animate="show"
              className="sidebar__image"
              alt='profile emoji'
              src={emojiImage}
            />
          </div>
          <motion.div
            variants={nameBackgroundVariants}
            initial="hidden"
            animate="show"
            className="sidebar__name_container"
          >
            <motion.ul className="sidebar__name">
              <motion.li variants={nameVariants}>Dimitri</motion.li>
              <motion.li variants={nameVariants}>Pierre</motion.li>
              <motion.li variants={nameVariants}>Louis</motion.li>


            </motion.ul>
            <motion.div variants={nameVariants} className="info text--subtitle">
              Software Developer{"  "}
              <motion.div
                initial="hidden"
                animate="show"
                variants={yLandingAnimation}
                className='pin'
              >
                <span role='img' aria-label='Location Pin Emoji'>📍</span>
              </motion.div>{"  "}
              <div className="location">Boston, MA</div>
            </motion.div>
            <motion.p variants={nameVariants}>
              <span className="sidebar__links text--subtitle"><a href='https://github.com/DimitriMichel'>Github</a></span>
              <span className="sidebar__links text--subtitle">e-Mail</span>
              <span className="sidebar__links text--subtitle"></span>
            </motion.p>
          </motion.div>
          <motion.img
            initial="static"
            animate="floating"
            transition="transition"
            className="down-arrow"
            variants={yBouncingAnimation}
            src={downArrow}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

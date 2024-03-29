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
    y: 4,
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
      delay: 1.9,
      duration: 0.6,
    },
  },
};
const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div className="sidebar">
        <div className="sidebar__content">
          <motion.div
            whileHover={{
              y: 70,
            }}
            transition={{  y: { type: "tween"},}}
            className="sidebar__image__container"
          >
            <motion.img
              variants={imageVariants}
              initial="hidden"
              animate="show"
              className="sidebar__image"
              alt="profile emoji"
              height="160"
              width="136"
              src={emojiImage}
            />
          </motion.div>
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
              <p>Software Developer</p>
              <motion.div
                initial="hidden"
                animate="show"
                variants={yLandingAnimation}
                className="pin"
              >
                <span role="img" aria-label="Location Pin Emoji">
                  📍
                </span>
              </motion.div>
              {"  "}
              <p className="location">Boston, MA</p>
            </motion.div>
            <motion.p variants={nameVariants}>
              <span className="sidebar__links text--subtitle">
                <a href="https://github.com/DimitriMichel">Github</a>
              </span>

              <span className="sidebar__links text--subtitle"><a href="mailto:dimitri.michel@hey.com">e-Mail</a></span>
                <span className="sidebar__links text--subtitle"><a href="https://www.linkedin.com/in/dimitrimichel/">linkedIn</a></span>
            </motion.p>

            <motion.p variants={nameVariants}>
              <motion.div className="sidebar__links--projects center">projects i've worked on
                <span className="ml-3" role="img" aria-label="Rocket Ship Emoji">
                 🚀
                </span>

              </motion.div>
              <div>
                <ul className="sidebar__links__list">
                  <li>
                   <span className="sidebar__links text--subtitle">
                    <a href="https://apps.apple.com/us/app/navigating-life/id1436512420">
                        navigating life
                    </a>
                   </span>
                    🌔
                  </li>
                  <li>
                   <span className="sidebar__links text--subtitle">
                    <a href="https://newtonfreelibrary.net/">
                        newton free library
                    </a>
                   </span>
                  </li>
                  <li>
                   <span className="sidebar__links text--subtitle">
                    <a href="https://junkjunkbaby.com/">
                        junk junk baby
                    </a>
                   </span>
                  </li>                  <li>
                   <span className="sidebar__links text--subtitle">
                    <a href="https://apps.apple.com/us/app/fullmer-construction/id1486397406">
                        fullmer construction
                    </a>
                   </span>
                  </li>
                </ul>
              </div>
            </motion.p>

          </motion.div>
          <motion.img
            initial="static"
            animate="floating"
            transition="transition"
            className="down-arrow"
            alt="Arrow Pointing Down"
            variants={yBouncingAnimation}
            src={downArrow}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

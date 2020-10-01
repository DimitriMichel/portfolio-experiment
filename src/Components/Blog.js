import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import moneyPNG from "../images/money.png";
import booksPNG from "../images/books.png";
import brainPNG from "../images/brain.png";
import BlogPost from "./BlogPost";
import LazyLoad from "react-lazyload";
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
    <LazyLoad height={280}>
      <div className="box--blue box__projects">
        <div
          className="box__content__container
      black--pattern "
        >
          <div className="projects__content ">
            <div className="box__header">
              <motion.div className="box--title">Blog</motion.div>

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
                    ✍️
                  </span>
                ) : (
                  <div></div>
                )}
              </motion.div>
            </div>

            <motion.div animate={{ opacity: 1 }} className="project__content">
              <BlogPost
                imageSource={brainPNG}
                alt="sculpture of human head"
                blogLink="https://blog-dov9hkpfk.vercel.app/whatishappening"
                blogTitle="How I Stopped Worrying And Learned To Love The Atom"
              />
              <BlogPost
                imageSource={moneyPNG}
                alt="money"
                blogLink="https://blog-dov9hkpfk.vercel.app/transformation"
                blogTitle="Cost: Demystified"
              />
              <BlogPost
                imageSource={booksPNG}
                alt="stack of books on a table"
                blogLink="https://blog-dov9hkpfk.vercel.app/needtoknow"
                blogTitle="React 101: Required Materials"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default Blog;

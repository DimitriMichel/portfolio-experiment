import React from "react";

const BlogPost = ({ imageSource, blogLink, alt, blogTitle }) => {
  return (
    <div className="project-container">
      <div className="blog__post">
        <div className="blog__image__container">
          <img
            className="blog__image"
            height="auto"
            width="100%"
            src={imageSource}
            alt={alt}
        />
        </div>
        <div className="project__info text--subtitle --blog">
          <a className="blog--title" href={blogLink}>
            {blogTitle}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

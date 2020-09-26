import React from "react";

const BlogPost = ({ imageSource, blogLink, alt, blogTitle }) => {
  return (
    <div className="project-container">
      <div className="project">
        <img
          className="project__video"
          height="auto"
          width="100%"
          src={imageSource}
          alt={alt}
        />

        <div className="project__info text--subtitle">
          <a href={blogLink}>{blogTitle}</a>
        </div>
      </div>
    </div>
  );
};



export default BlogPost;

import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Blogs = (props) => {

  const { img, id, title, date } = props;

  const link = `/blog/${id}`;
  return (
    <div className="blog-post">
      <Link to={link} className="blog-post_img">
        <img src={img} alt="" />
      </Link>
      <div className="blog-post_info">
        <p className="blog-post_date">
          <strong>Date:</strong> {date}
        </p>
        <h1 className="blog-post_title">{title}</h1>
        <Link to={link} className="blog-post_cta">
          Read Article
        </Link>
      </div>
    </div>
  );
};

export default Blogs;

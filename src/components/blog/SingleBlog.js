import React from 'react';
import { Link } from 'react-router-dom';

export const SingleBlog = () => {
  return (
    <div className="single-blog">
      <img src={require("../../assets/blog-image.svg")} alt="Blog " />
      <Link to="/blog/blogid" className='blog-title'>Innovations in Agriculture</Link>
      <p className="meta-data">
        <span>22 May 2022 . </span>
        <span>2 min read</span>
      </p>
      <img src={require("../../assets/logo-flat-white.svg")} alt="Agcademy" className='alt-sig'/>
    </div>
  );
};

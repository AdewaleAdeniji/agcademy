import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import { SingleBlog } from "./SingleBlog";
const BlogsList = () => {
  const [blogCount, setBlogCount] = useState(10);
  const blogArray = Array.from(Array(blogCount).keys());
  const [loading, setLoading] = useState(false);
  const loadMore = () => {
    setLoading(true);
    window.setTimeout(() => {
      setBlogCount(blogCount + 3);
      setLoading(false);
    }, 3000);
  };
  return (
    <>
      <div className="blogs-list">
        {blogArray.map(() => {
          return <SingleBlog />;
        })}
      </div>
      <div className="load-more">
        <button onClick={loadMore}>
          Load More{" "}
          {loading && (
            <CircularProgress
              color="inherit"
              sx={{
                color: "#fffff",
              }}
            />
          )}{" "}
        </button>
      </div>
    </>
  );
};
export default BlogsList;

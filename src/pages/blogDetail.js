import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import PageContainer from "../containers/PageContainer";
import { blogCache } from "../services/blog";
import { CircularProgress } from "@mui/material";
import moment from "moment";
import readingTime from "reading-time";
import ReactMarkdown from "react-markdown";

const BlogDetails = () => {
  window.scrollTo(0, 0);
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  const history = useHistory();
  if (!id) {
    history.push("/blogs");
  }
  useEffect(() => {
    if (loading) {
      getBlog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  const getBlog = async () => {
    const blog = await blogCache.getBlog({ id, setLoading });
    setBlog(blog);
  };
  const stats = readingTime(blog?.contentMarkdown || "");
  return (
    <PageContainer title={blog?.title}>
      {loading && (
        <div className="load-more blog">
          <button>
            <CircularProgress
              color="inherit"
              sx={{
                color: "#fffff",
              }}
            />
          </button>
        </div>
      )}
      {!loading && !blog?.status && (
        <div className="load-more blog">Blog could not be found!</div>
      )}
      {!loading && blog?.status && (
        <div className="blog-detail">
          <h6 className="blog-tag">Agribusiness</h6>
          <h4 className="blog-title">{blog?.title}</h4>
          <p className="blog-meta">
            {moment(blog?.dateAdded).format("ll")} . {stats?.text}
          </p>
          <img
            src={require("../assets/logo-flat-white.svg")}
            className="img-sig"
            alt="Agcademy"
          />

          {blog?.coverImage && (
            <img
              src={blog?.coverImage || require("../assets/blog-img.svg")}
              className="blog-image"
              alt="blog"
            />
          )}
          <div className="blog-text">
            <ReactMarkdown>{blog?.contentMarkdown}</ReactMarkdown>
          </div>
        </div>
      )}
    </PageContainer>
  );
};

export default BlogDetails;

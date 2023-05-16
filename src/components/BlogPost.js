import CategoryButton from "./CategoryButton";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import config from "../config/config";

const { DateTime } = require("luxon");

const BlogPost = ({ postid }) => {
  const [blogPostDetail, setBlogPostDetail] = useState(null);

  useEffect(() => {
    // Fetch data from blog api
    const apiUrl = config.apiUrl;
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch(`${apiUrl}/posts/${postid}`);
        const data = await response.json();
        setBlogPostDetail(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlogDetail();
  }, [postid]);

  // Render when blogPostDetail is null
  if (!blogPostDetail) {
    return (
      <div className="loading-message">
        <div className="container">Fetching blog post...</div>
      </div>
    );
  }

  return (
    <div className="blog-post">
      <div className="container">
        <div className="blog-wrapper">
          <div className="banner-wrapper">
            <img src={blogPostDetail.image_url} alt={`${blogPostDetail.title} banner`} />
          </div>

          <CategoryButton category={blogPostDetail.category} />

          <div className="blog-title">{blogPostDetail.title}</div>
          <div className="blog-subtitle">
            <p className="author">by {blogPostDetail.author}</p>
            <span className="separator"></span>
            <p className="date">
              {DateTime.fromJSDate(
                new Date(blogPostDetail.publishedDate)
              ).toLocaleString(DateTime.DATETIME_MED)}
            </p>
            <span className="separator"></span>
            <p>{blogPostDetail.minute_read} min read</p>
          </div>

          <div className="tag-wrapper">
            {blogPostDetail.tags.map((tag) => (
              <button className="blog-tags text-tiny" key={tag._id}>
                <Link to={`/tags/${tag._id}`}>#{tag.name}</Link>
              </button>
            ))}
          </div>

          <div className="blog-content">{blogPostDetail.content}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

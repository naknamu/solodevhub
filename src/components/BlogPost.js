import CategoryButton from "./CategoryButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import config from "../config/config";
import MarkdownPreview from "./MdPreview";

const { DateTime } = require("luxon");

const BlogPost = ({ postid }) => {
  const [blogPostDetail, setBlogPostDetail] = useState(null);
  const navigate = useNavigate();

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

  // Handle tag click
  const handleClick = (tag) => {
    const urlRegex = /\s/g;
    const url_title = tag.name.toLowerCase().replace(urlRegex, '-');

    navigate(`/tags/${tag._id}/what-is-${url_title}`);
  }


  return (
    <div className="blog-post">
      <div className="container">
        <div className="blog-wrapper">
          <div className="banner-wrapper">
            <img src={blogPostDetail.image_url} alt={`${blogPostDetail.title} banner`} loading="lazy" />
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
              <button className="blog-tags text-tiny" key={tag._id} onClick={() => handleClick(tag)}>
                #{tag.name}
              </button>
            ))}
          </div>

          <div className="blog-content"><MarkdownPreview markdown={blogPostDetail.content} /></div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

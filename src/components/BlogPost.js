import CategoryButton from "./CategoryButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import config from "../config/config";
import MarkdownPreview from "./MdPreview";
import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const { DateTime } = require("luxon");

const BlogPostStyled = styled.div`

  @media (min-width: 650px) {
    margin-top: 1rem;
  }

  @media (min-width: 1024px) {
    background: var(--action-secondary);
    margin: 0;
    padding-block: var(--pad-2);

    .container {
      background: var(--background-primary);
      max-width: 800px;
    }
  }
`;

const BlogWrapper = styled.div`
  display: grid;
  gap: 1rem;
`;

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-block: 1rem;
`;

const BlogTitle = styled.div`
  font-weight: 700;
  font-size: var(--fs-1);
  line-height: 1.4;
`;

const BlogSubtitles = styled.div`
  display: flex;
  align-items: center;
  color: var(--foreground-secondary);
  font-size: var(--fs-5);
  gap: 5px;

  @media (min-width: 650px) {
    font-size: var(--fs-4);
  }
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const BlogTags = styled.div`
  color: var(--foreground-secondary);
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const BlogContent = styled.div`
  margin-bottom: var(--pad-3);
  margin-top: var(--pad-1);
`;


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
    <BlogPostStyled>
      <div className="container">
        <BlogWrapper>
          <BannerWrapper>
            {/* <img src={blogPostDetail.image_url} alt={`${blogPostDetail.title} banner`} loading="lazy" width={384} height={370} /> */}
            <LazyLoadImage src={blogPostDetail.image_url} alt={`${blogPostDetail.title} banner`} width={384} height={370}  />
          </BannerWrapper>

          <CategoryButton category={blogPostDetail.category} />

          <BlogTitle>{blogPostDetail.title}</BlogTitle>

          <BlogSubtitles>
            <p className="author">by {blogPostDetail.author}</p>
            <span className="separator"></span>
            <p className="date">
              {DateTime.fromJSDate(
                new Date(blogPostDetail.publishedDate)
              ).toLocaleString(DateTime.DATETIME_MED)}
            </p>
            <span className="separator"></span>
            <p>{blogPostDetail.minute_read} min read</p>
          </BlogSubtitles>

          <TagWrapper>
            {blogPostDetail.tags.map((tag) => (
              <BlogTags className="text-tiny" key={tag._id} onClick={() => handleClick(tag)}>
                #{tag.name}
              </BlogTags>
            ))}
          </TagWrapper>

          <BlogContent><MarkdownPreview markdown={blogPostDetail.content} /></BlogContent>
        </BlogWrapper>
      </div>
    </BlogPostStyled>
  );
};

export default BlogPost;

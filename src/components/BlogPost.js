import CategoryButton from "./CategoryButton";
import { useNavigate } from "react-router-dom";
import config from "../config/config";
import MarkdownPreview from "./MdPreview";
import styled from "styled-components";
import { useQuery } from 'react-query';

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
  const navigate = useNavigate();

  const fetchPosts = async() => {
    const response = await fetch(`${config.apiUrl}/posts/${postid}`);

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    return response.json();
  }

  const { data, error } = useQuery('blogPosts', fetchPosts);

  if (error) {
    return <div className="container">Error: {error.message}</div>;
  }

  // Render when data is not null
  if (!data) {
    return (
      <BlogPostStyled>
        <div className="container">
          <div>Fetching blog post...</div>
        </div>
      </BlogPostStyled>
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
            <img src={data.image_url} alt={`${data.title} banner`} loading="lazy" />
          </BannerWrapper>

          <CategoryButton category={data.category} />

          <BlogTitle>{data.title}</BlogTitle>

          <BlogSubtitles>
            <p className="author">by {data.author}</p>
            <span className="separator"></span>
            <p className="date">
              {DateTime.fromJSDate(
                new Date(data.publishedDate)
              ).toLocaleString(DateTime.DATETIME_MED)}
            </p>
            <span className="separator"></span>
            <p>{data.minute_read} min read</p>
          </BlogSubtitles>

          <TagWrapper>
            {data.tags.map((tag) => (
              <BlogTags className="text-tiny" key={tag._id} onClick={() => handleClick(tag)}>
                #{tag.name}
              </BlogTags>
            ))}
          </TagWrapper>

          <BlogContent><MarkdownPreview markdown={data.content} /></BlogContent>
        </BlogWrapper>
      </div>
    </BlogPostStyled>
  );
};

export default BlogPost;

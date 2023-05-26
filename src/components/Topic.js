import styled from "styled-components";
import BlogListCard from "../components/BlogListCard";
import MarkdownPreview from "./MdPreview";

const TopicDetail = styled.div`

  margin-block: 2rem;

  .container {
    display: grid;
    gap: 1rem;
  }

`;

const BloglistWrapper = styled.ul`
  display: grid;
  gap: 1.125rem;
  margin-bottom: var(--pad-3);
`;

const Topic = ({ topic, topicName, blogPosts }) => {

  return (
    <TopicDetail>
      <div className="container">

        <h1 className="topic-title h1">{topic.name}</h1>
        <MarkdownPreview markdown={topic.detail} />
        
        <h2 className="h2">Blog Posts</h2>
        <h3 className="h3">These are the blog posts under this {topicName}:</h3>
        <BloglistWrapper>
          {blogPosts &&
            blogPosts.map((blogPost) => (
              <BlogListCard blogPost={blogPost} key={blogPost._id} />
            ))}
        </BloglistWrapper>
      </div>
    </TopicDetail>
  );
};

export default Topic;

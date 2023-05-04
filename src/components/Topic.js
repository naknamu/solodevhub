import BlogListCard from "../components/BlogListCard";

const Topic = ({ topic, topicName, blogPosts }) => {
  return (
    <div className="topic-detail">
      <div className="container">
        <h1 className="topic-title h1">{topic.name}</h1>
        <p>{topic.detail}</p>
        <h2 className="h2">Blog Posts</h2>
        <p>These are the blog posts under this {topicName}:</p>
        <ul className="blogList-wrapper">
          {blogPosts &&
            blogPosts.map((blogPost) => (
              <BlogListCard blogPost={blogPost} key={blogPost._id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Topic;
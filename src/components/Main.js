import BlogPostCard from "./BlogPostCard";

const Main = ({ blogPosts }) => {
  return (
    <div className="main">
      <div className="container">
        <div className="blog">
          <h2 className="h2">Latest Blog Posts</h2>
          <div className="blogPosts-card">
            {blogPosts &&
              blogPosts.map((blogPost) => (
                <BlogPostCard blogPost={blogPost} key={blogPost._id} />
              ))}
          </div>
          <div className="btn load-more">Load More</div>
        </div>
      </div>
    </div>
  );
};

export default Main;

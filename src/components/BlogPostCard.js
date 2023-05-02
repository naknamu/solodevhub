// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { Link } from "react-router-dom";

const BlogPostCard = ({ blogPost }) => {
  return (
    <div className="blogPost-card">

      <div className="blog-card-banner">
        <img src="#" alt="Blog Post Banner" />
      </div>

      <div className="blog-content-wrapper">

        <button className="blog-category text-tiny">
          <Link to={`/categories/${blogPost.category._id}`}>
            {blogPost.category.name}
          </Link>
        </button>

        <Link to={`/posts/${blogPost._id}`}>
          <h3 className="h3">{blogPost.title}</h3>
          <p>{blogPost.url}</p>
        </Link>

        <div className="wrapper">

          <div className="h4">{blogPost.author}</div>

          <div className="text-sm">
            <div>
              {formatDistanceToNow(new Date(blogPost.publishedDate), {
                addSuffix: true,
              })}
            </div>
            <span className="separator"></span>
            <div>{blogPost.minute_read} min read</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;

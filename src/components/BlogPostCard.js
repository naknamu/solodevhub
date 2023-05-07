// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { Link } from "react-router-dom";
import CategoryButton from "./CategoryButton";

const BlogPostCard = ({ blogPost }) => {

  const MAX_PREVIEW_LENGTH = 200; // maximum length of the preview content

  // extract the preview content from the full content
  const previewContent = blogPost.content.substring(0, MAX_PREVIEW_LENGTH);

  return (
    <div className="blogPost-card">
      <div className="blog-card-banner">
        <img src={blogPost.image_url === undefined ? "#" : blogPost.image_url} alt="Blog Post Banner" className="blog-banner-img" />
      </div>

      <div className="blog-content-wrapper">
        <CategoryButton category={blogPost.category} />

        <Link to={`/posts/${blogPost._id}`}>
          <h3 className="h3">{blogPost.title}</h3>
          <p>{blogPost.url}</p>
        </Link>

        <p className="blog-text">
          {previewContent}....
        </p>

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

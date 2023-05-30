import CategoryButton from "./CategoryButton";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useNavigate } from "react-router";

const BlogPostCard = ({ blogPost }) => {
  const MAX_PREVIEW_LENGTH = 200; // maximum length of the preview content
  const navigate = useNavigate();

  // extract the preview content from the full content
  const previewContent = blogPost.content.substring(0, MAX_PREVIEW_LENGTH);

  // Navigate to Blog Detail Page
  const handleClick = () => {
    const urlRegex = /\s/g;
    const url_title = blogPost.title.toLowerCase().replace(urlRegex, "-");

    navigate(`/posts/${blogPost._id}/${url_title}`);
  };

  return (
    <div className="blogPost-card">
      <div className="blog-card-banner">
        <img
          src={blogPost.image_url === undefined ? "#" : blogPost.image_url}
          alt="Blog Post Banner"
          className="blog-banner-img"
          loading="lazy"
          onClick={() => handleClick()}
        />
      </div>

      <div className="blog-content-wrapper">
        <CategoryButton category={blogPost.category} />

        <h3 className="h3" onClick={() => handleClick()}>
          {blogPost.title}
        </h3>

        <p className="blog-text">{previewContent}....</p>

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

import { useNavigate } from "react-router-dom";
const { DateTime } = require("luxon");

const BlogListCard = ({ blogPost }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const urlRegex = /\s/g;
    const url_title = blogPost.title.toLowerCase().replace(urlRegex, '-');

    navigate(`/posts/${blogPost._id}/${url_title}`);
  }

  return (
    <li className="blogList-card" onClick={handleClick}>
      <div className="blogList-card-wrapper">
        <div className="blogList-title">
          {blogPost.title}
        </div>
        <p className="blogList-date">
          Published Date:{" "}
          {DateTime.fromJSDate(new Date(blogPost.publishedDate)).toLocaleString(
            DateTime.DATE_MED
          )}
        </p>
      </div>
    </li>
  );
};

export default BlogListCard;

import { useParams } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import Comment from "../components/Comment";

const BlogPostDetail = () => {
  const { postid } = useParams();

  return (
    <div className="blogPostDetail">
      <BlogPost postid={postid} />
      <Comment postid={postid} />
    </div>
  );
};

export default BlogPostDetail;

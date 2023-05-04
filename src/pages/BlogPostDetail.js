import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import Comment from "../components/Comment";

const BlogPostDetail = () => {
  const { postid } = useParams();
  const [blogPostDetail, setBlogPostDetail] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    // Fetch data from blog api
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/posts/${postid}`);
        const data = await response.json();
        setBlogPostDetail(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlogDetail();
    fetchComments();

    // eslint-disable-next-line
  }, [postid]);

  // Fetch comments
  const fetchComments = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/posts/${postid}/comments`);
      const data = await response.json();
      setComments(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="blogPostDetail">
      {blogPostDetail && <BlogPost blogPostDetail={blogPostDetail} />}
      <Comment
        comments={comments}
        postid={postid}
        fetchComments={fetchComments}
      />
    </div>
  );
};

export default BlogPostDetail;

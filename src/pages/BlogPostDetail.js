import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import Comment from "../components/Comment";

const BlogPostDetail = () => {
  const { postid } = useParams();
  const [blogPostDetail, setBlogPostDetail] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    // Fetch Blog Posts and Comments concurrently
    const fetchBlogAndComments = async () => {
      try {
        const [postResponse, commentsResponse] = await Promise.all([
          fetch(`${process.env.REACT_APP_API_URL}/api/posts/${postid}`),
          fetch(`${process.env.REACT_APP_API_URL}/api/posts/${postid}/comments`)
        ]);
        const postData = await postResponse.json();
        const commentsData = await commentsResponse.json();
        setBlogPostDetail(postData);
        setComments(commentsData);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchBlogAndComments();
  }, [postid]);

  return (
    <div className="blogPostDetail">
      {blogPostDetail && <BlogPost blogPostDetail={blogPostDetail} />}
      <Comment
        comments={comments}
        postid={postid}
        setComments={setComments}
      />
    </div>
  );
};

export default BlogPostDetail;

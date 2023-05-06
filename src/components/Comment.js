import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

const Comment = ({ postid }) => {
  const [comments, setComments] = useState(null);

  // Fetch comments
  const fetchComments = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/posts/${postid}/comments`
      );
      const data = await response.json();
      setComments(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line
  }, [postid]);

  return (
    <div className="comment">
      <CommentForm postid={postid} fetchComments={fetchComments} />

      <div className="container">
        <div className="comment-title h3">
          Comments ({comments?.length === undefined ? "" : comments.length})
        </div>

        {comments &&
          comments.map((comment) => (
            <CommentCard comment={comment} key={comment._id} />
          ))}
      </div>
    </div>
  );
};

export default Comment;

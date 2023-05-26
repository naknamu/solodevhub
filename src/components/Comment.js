import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import config from "../config/config";
import styled from "styled-components";

const CommentStyled = styled.div`
  padding-bottom: var(--pad-3);
  background: var(--background-secondary);

  .container {
    display: grid;
    gap: 15px;
  }

  @media (min-width: 1024px) {
    .container {
      max-width: 800px;
    }
  }
`;

const Comment = ({ postid }) => {
  const [comments, setComments] = useState(null);

  // Fetch comments
  const fetchComments = async () => {
    try {
      const apiUrl = config.apiUrl;
      const response = await fetch(`${apiUrl}/posts/${postid}/comments`);
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
    <CommentStyled>
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
    </CommentStyled>
  );
};

export default Comment;

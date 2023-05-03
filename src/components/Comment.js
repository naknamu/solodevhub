import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

const Comment = ({ comments, postid, fetchComments }) => {
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

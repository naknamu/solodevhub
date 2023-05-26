import styled from "styled-components";

const { DateTime } = require("luxon");

const CommentCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--action-primary);
  padding: 12px;
  border-radius: var(--radius-6);
  gap: 10px;
  box-shadow: var(--shadow-4);
  background: var(--background-primary);
`;

const CommentWrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--foreground-secondary);
  font-size: var(--fs-4);
  gap: 5px;
`;

const CommentName = styled.div`
  font-weight: 600;
`;

const CommentCard = ({ comment }) => {
  return (
    <CommentCardStyled>
      <CommentWrapper>
        <CommentName>{comment.name}</CommentName>
        <div className="separator"></div>
        <div className="comment-date">
          {DateTime.fromJSDate(new Date(comment.createdAt)).toLocaleString(
            DateTime.DATE_MED
          )}
        </div>
      </CommentWrapper>

      <div className="comment-message">{comment.message}</div>
    </CommentCardStyled>
  );
};

export default CommentCard;

const { DateTime } = require("luxon");

const CommentCard = ({comment}) => {
    return ( 
    <div className="comment-card">
            <div className="comment-head">
                <div className="comment-name">
                    {comment.name}
                </div>
                <div className="separator"></div>
                <div className="comment-date">
                    {DateTime.fromJSDate(new Date(comment.createdAt)).toLocaleString(DateTime.DATE_MED)}
                </div>
            </div>
        
            <div className="comment-message">
                {comment.message}
            </div>
    </div>
    );
}
 
export default CommentCard;
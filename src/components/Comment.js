const { DateTime } = require("luxon");

const Comment = ({ comments }) => {
    return ( 
        <div className="comment">
            <div className="container">

                <div className="comment-title h3">Comments (
                    {(comments?.length === undefined) ? "" : comments.length})
                </div>

                {comments && comments.map((comment) => (
                    <div className="comment-card" key={comment._id}>
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
                ))}
            </div>
        </div>
    );
}
 
export default Comment;
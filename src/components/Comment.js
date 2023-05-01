import CommentCard from "./CommentCard";

const Comment = ({ comments }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();

    }

    return ( 
        <div className="comment">
            <div className="container">

                <h3 className="h3">
                    Leave a comment
                </h3>

                <div className="comment-form">
                    <form action="" method="post" onSubmit={(e) => {handleSubmit(e)}}>
                        <input className="input-field" type="text" name="name" id="name" placeholder="Name" />
                        <textarea className="input-field" name="message" id="message" placeholder="Message"></textarea>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>

                <div className="comment-title h3">Comments (
                    {(comments?.length === undefined) ? "" : comments.length})
                </div>

                {comments && comments.map((comment) => (
                    <CommentCard comment={comment} key={comment._id} />
                ))}
            </div>
        </div>
    );
}
 
export default Comment;
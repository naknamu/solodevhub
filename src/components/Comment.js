import { useState } from "react";
import CommentCard from "./CommentCard";

const Comment = ({ comments, postid, fetchComments }) => {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    // for the error message shown to the user
    const [nameError, setNameError] = useState("");
    const [messageError, setMessageError] = useState("");
    // for the class style
    const [isNameError, setIsNameError] = useState(false);
    const [isMessageError, setIsMessageError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const comment = {name, message};

        const response = await fetch(`/api/posts/${postid}/comment/create`, {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();

        if (response.ok) {
            // Reset all fields
            setName('');
            setMessage('');
            setNameError('');
            setMessageError('');
            setIsNameError(false);
            setIsMessageError(false);
            // Fetch again to show new comment
            fetchComments();
        } else {
            // Show error messages to the user
            setNameError(data.name?.msg)
            setMessageError(data.message?.msg);
            // Change to error class style
            (data.name?.msg) ? setIsNameError(true) : setIsNameError(false);
            (data.message?.msg) ? setIsMessageError(true) : setIsMessageError(false)
        }

    }

    return ( 
        <div className="comment">
            <div className="container">

                <h3 className="h3">
                    Leave a comment
                </h3>

                <div className="comment-form">
                    <form action="" method="post" onSubmit={(e) => {handleSubmit(e)}}>

                        <input className={`input-field ${isNameError ? `errorField` : ``}`} type="text" name="name" id="name" placeholder="Name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <p className="error">{nameError}</p>

                        <textarea className={`input-field ${isMessageError ? `errorField` : ``}`} name="message" id="message" placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}></textarea>
                        <p className="error">{messageError}</p>
                            
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
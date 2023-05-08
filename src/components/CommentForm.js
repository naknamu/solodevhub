import { useState } from "react";
import config from "../config/config";

const CommentForm = ({ postid, fetchComments }) => {
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

    const comment = { name, message };

    const apiUrl = config.apiUrl;

    const response = await fetch(`${apiUrl}/posts/${postid}/comment/create`, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (response.ok) {
      // Reset all fields
      setName("");
      setMessage("");
      setNameError("");
      setMessageError("");
      setIsNameError(false);
      setIsMessageError(false);
      // Fetch again to show new comment
      fetchComments();
    } else {
      // Show error messages to the user
      setNameError(data.name?.msg);
      setMessageError(data.message?.msg);
      // Change to error class style
      data.name?.msg ? setIsNameError(true) : setIsNameError(false);
      data.message?.msg ? setIsMessageError(true) : setIsMessageError(false);
    }
  };

  return (
    <div className="comment-form">
      <div className="container">
        <h3 className="h3 comment-form-title">Leave a comment</h3>

        <form
          action=""
          method="post"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            className={`input-field ${isNameError ? `errorField` : ``}`}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="error">{nameError}</p>

          <textarea
            className={`input-field ${isMessageError ? `errorField` : ``}`}
            name="message"
            id="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <p className="error">{messageError}</p>

          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;

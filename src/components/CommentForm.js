import { useState } from "react";
import styled, { css } from "styled-components";
import config from "../config/config";

const CommentFormStyled = styled.div`
  border-top: 1px solid var(--action-primary);
  background: var(--background-secondary);

  @media (min-width: 768px) {
    padding-top: 2rem;
  }
`;

const FormTitle = styled.div`
  margin-bottom: 1rem;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: var(--pad-2);
`;

const sharedCSS = css`
  border-radius: var(--radius-6);
  padding: 12px;
  background: var(--background-primary);

  :focus {
    outline: none;
    border: 1px solid var(--accent);
  }
`;

const InputField = styled.input`
  ${sharedCSS}
  border: 1px solid ${(props) =>
    !props.isNameError ? "var(--action-primary)" : "red"};
`;

const TextareaStyled = styled.textarea`
  ${sharedCSS}
  border: 1px solid ${(props) =>
    !props.isMessageError ? "var(--action-primary)" : "red"};
  min-height: 120px;
  height: 120px;
  max-height: 240px;
  resize: vertical;
  border-radius: var(--radius-6);
`;

const Error = styled.div`
  font-size: var(--fs-5);
  color: red;
  transform: translateY(-10px);
  padding-inline: 10px;
`;

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
    <CommentFormStyled>
      <div className="container">
        <FormTitle className="h3">Leave a comment</FormTitle>

        <FormStyled
          action=""
          method="post"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <InputField
            isNameError={isNameError}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Error>{nameError}</Error>

          <TextareaStyled
            isMessageError={isMessageError}
            name="message"
            id="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></TextareaStyled>
          <Error>{messageError}</Error>

          <button className="btn btn-primary">Submit</button>
        </FormStyled>
      </div>
    </CommentFormStyled>
  );
};

export default CommentForm;

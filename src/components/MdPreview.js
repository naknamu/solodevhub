import MDEditor from "@uiw/react-md-editor";

const MarkdownPreview = ({ markdown }) => {
  return (
    <div data-color-mode="light">
      <div className="wmde-markdown-var"> </div>
      <MDEditor.Markdown source={markdown} />
    </div>
  );
};

export default MarkdownPreview;

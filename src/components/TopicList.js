import { useNavigate } from "react-router-dom";

const TopicList = ({ topic, topicLists }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const urlRegex = /\s/g;
    const url_title = topic.name.toLowerCase().replace(urlRegex, '-');

    navigate(`/${topicLists}/${topic._id}/what-is-${url_title}`);
  }

  return (
    <li className="topicList-card" onClick={handleClick}>
      {topic.name}
    </li>
  );
};

export default TopicList;

import { Link } from "react-router-dom";

const TopicList = ({ topic, topicLists }) => {
  return (
    <li className="topicList-card">
      <Link to={`/${topicLists}/${topic._id}`}> {topic.name} </Link>
    </li>
  );
};

export default TopicList;

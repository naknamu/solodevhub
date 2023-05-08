import { useEffect, useState } from "react";
import TopicList from "../components/TopicList";
import config from "../config/config";

const Tags = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      const apiUrl = config.apiUrl;
      const response = await fetch(`${apiUrl}/tags/`);
      const data = await response.json();

      setTags(data);
    };

    fetchTags();
  }, []);

  return (
    <div className="tags">
      <div className="container">
        <h1 className="h1">All tags</h1>
        <ul className="topicList-wrapper">
          {tags &&
            tags.map((tag) => (
              <TopicList key={tag._id} topic={tag} topicLists={"tags"} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Tags;

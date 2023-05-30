import { useEffect, useState } from "react";
import TopicList from "../components/TopicList";
import config from "../config/config";
import {
  AllTopic,
  TopicWrapper,
  TopicListWrapper,
} from "../components/StyledComponents";

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
    <AllTopic>
      <div className="container">
        <TopicWrapper>
          <h1 className="h1">Tags</h1>
          <p>Click tag to view details:</p>
          <TopicListWrapper>
            {tags &&
              tags.map((tag) => (
                <TopicList key={tag._id} topic={tag} topicLists={"tags"} />
              ))}
          </TopicListWrapper>
        </TopicWrapper>
      </div>
    </AllTopic>
  );
};

export default Tags;

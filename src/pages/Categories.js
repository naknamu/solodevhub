import { useEffect, useState } from "react";
import TopicList from "../components/TopicList";
import config from "../config/config";
import { AllTopic, TopicWrapper, TopicListWrapper } from "../components/StyledComponents";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const apiUrl = config.apiUrl;
      const response = await fetch(`${apiUrl}/categories/`);
      const data = await response.json();

      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <AllTopic>
      <div className="container">
        <TopicWrapper>
          <h1 className="h1">Categories</h1>
          <p>Click category to view details:</p>
          <TopicListWrapper>
            {categories &&
              categories.map((category) => (
                <TopicList
                  key={category._id}
                  topic={category}
                  topicLists={"categories"}
                />
              ))}
          </TopicListWrapper>
        </TopicWrapper>
      </div>
    </AllTopic>
  );
};

export default Categories;

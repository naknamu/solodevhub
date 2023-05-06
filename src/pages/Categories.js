import { useEffect, useState } from "react";
import TopicList from "../components/TopicList";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/categories/`
      );
      const data = await response.json();

      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className="categories">
      <div className="container">
        <h1 className="h1">All categories</h1>
        <ul className="topicList-wrapper">
          {categories &&
            categories.map((category) => (
              <TopicList
                key={category._id}
                topic={category}
                topicLists={"categories"}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
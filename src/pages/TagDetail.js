import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Topic from "../components/Topic";

const TagDetail = () => {
  const { tagid } = useParams();
  const [tag, setTag] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchTagDetails = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/tags/${tagid}`);
      const data = await response.json();

      setTag(data.tag);

      // Filter only published posts
      const published_blogPost = data.blogPosts.filter(
        (blogPost) => blogPost.published === true
      );
      setBlogPosts(published_blogPost);
    };
    fetchTagDetails();
  }, [tagid]);

  return (
    <div className="tagDetail">
      <Topic topic={tag} blogPosts={blogPosts} topicName={"tag"} />
    </div>
  );
};

export default TagDetail;

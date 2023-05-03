import { useEffect, useState, useRef } from "react";

import Hero from "../components/Hero";
import Main from "../components/Main";

const Home = () => {
  const [blogPosts, setBlogPosts] = useState(null);
  const parentRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch("/api/posts/published");
        const json = await response.json();
        setBlogPosts(json);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlogPost();
  }, []);

  const scrollToChild = () => {
    childRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      <Hero ref={parentRef} scrollToChild={scrollToChild} />
      <Main blogPosts={blogPosts} ref={childRef} />
    </div>
  );
};

export default Home;

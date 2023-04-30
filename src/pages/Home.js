import { useEffect, useState } from "react";
import Footer from "../components/Footer";

import Hero from "../components/Hero";
import Main from "../components/Main";

const Home = () => {
  const [blogPosts, setBlogPosts] = useState(null);

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
  }, [blogPosts]);

  return (
    <div className="home">
      <Hero />
      <Main blogPosts={blogPosts} />
      <Footer />
    </div>
  );
};

export default Home;

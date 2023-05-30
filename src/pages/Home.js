import { useRef } from "react";
import Hero from "../components/Hero";
import Main from "../components/Main";

const Home = () => {
  const parentRef = useRef(null);
  const childRef = useRef(null);

  const scrollToChild = () => {
    childRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      <Hero ref={parentRef} scrollToChild={scrollToChild} />
      <Main ref={childRef} />
    </div>
  );
};

export default Home;

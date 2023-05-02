import { BsFacebook, BsTwitter, BsMessenger, BsReddit } from "react-icons/bs";
import { Link } from "react-router-dom";
import { forwardRef } from "react";

const Hero = forwardRef(({scrollToChild}, ref) => {
  return (
    <div className="hero" ref={ref}>
      <div className="container">
        <h1 className="h1">
          Welcome to <b>SoloDevHub!</b>
        </h1>
        <div className="details">
          <p className="h3">
            Get the latest insights and advice on software development, from
            coding tutorials to career tips.
          </p>
        </div>

        <div className="btn-group">
          <button className="btn btn-primary" onClick={scrollToChild}>Explore blog</button>
          <button className="btn btn-secondary"><Link to={"https://www.naknamu.com/"} target="_blank">About me</Link></button>
        </div>

        <div className="social-media">
          <p className="h4 text">
            Help us by sharing this site to your friends:{" "}
          </p>
          <div className="icon">
            <BsFacebook />
            <BsTwitter />
            <BsMessenger />
            <BsReddit />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Hero;

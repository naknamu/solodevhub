import { BsFacebook, BsTwitter, BsMessenger, BsReddit } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="hero">
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
          <button className="btn btn-primary">Explore blog</button>
          <button className="btn btn-secondary">Join us</button>
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
};

export default Hero;

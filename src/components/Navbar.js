import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenuClick = () => {
    setMenu(true);
  };

  const handleCloseClick = () => {
    setMenu(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
        <Link to="/" className="logo-wrapper">
          <span className="material-symbols-outlined">edit_square</span>
          <h1 className="logo-text h1">SoloDevHub</h1>
        </Link>

        <div className="nav-btn">
          <span
            className="material-symbols-outlined"
            onClick={() => handleMenuClick()}
          >
            menu
          </span>
        </div>

        <div className="flex-wrapper">

          <ul className="desktop-nav">

            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>

            <li>
              <Link to="/categories" className="nav-link">Categories</Link>
            </li>

            <li>
              <Link to="/tags" className="nav-link">Tags</Link>
            </li>

          </ul>

        </div>

        <div className={`mobile-nav ${menu ? "active" : ""}`}>
          <div className="mobile-nav-wrapper">
            <div
              className="nav-btn closeBtn"
              onClick={() => handleCloseClick()}
            >
              <span className="material-symbols-outlined">close</span>
            </div>

            <div className="nav-links">
              <Link to="/" onClick={() => handleCloseClick()}>
                Home
              </Link>
              <Link to="/categories" onClick={() => handleCloseClick()}>
                Categories
              </Link>
              <Link to="/tags" onClick={() => handleCloseClick()}>
                Tags
              </Link>
            </div>
          </div>
        </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

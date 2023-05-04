import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenuClick = () => {
    setMenu(true);
  }

  const handleCloseClick = () => {
    setMenu(false);
  }

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo-wrapper">
          <span className="material-symbols-outlined">edit_square</span>
          <h1 className="logo-text h1">SoloDevHub</h1>
        </Link>

        <div className="nav-btn">
          <span className="material-symbols-outlined" onClick={() => handleMenuClick()}>menu</span>
        </div>

         
        <div className={`mobile-nav ${menu ? "active" : ""}`}>
          <div className="mobile-nav-wrapper">

            <div className="nav-btn closeBtn" onClick={() => handleCloseClick()}>
              <span className="material-symbols-outlined">
                close
              </span>
            </div>

            <div className="nav-links">
              <Link to="/" onClick={() => handleCloseClick()}>Home</Link>
              <Link>Categories</Link>
              <Link>Tags</Link>
            </div>

          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo-wrapper">
          <span className="material-symbols-outlined">edit_square</span>
          <h1 className="logo-text h1">SoloDevHub</h1>
        </Link>

        <div className="menu-btn">
          <span className="material-symbols-outlined">menu</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

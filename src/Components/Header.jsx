import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
    document.body.classList.toggle("nav-wrap-is-visible", !isNavOpen);
  };

  return (
    <>
      <div className="s-pageheader">
        <header className="header">
          <div className="header__content row">
            <div className="header__logo">
              <a className="logo" href="index.html">
                <img src={logo} alt="Homepage" />
              </a>
            </div>

            <ul className="header__social">
              <li>
                <a>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                </a>
              </li>
            </ul>

            <a
              className="header__toggle-menu"
              title="Menu"
              onClick={toggleNav}
            >
              <span>Menu</span>
            </a>

            <nav className={`header__nav-wrap ${isNavOpen ? 'is-visible' : ''}`}>
              <h2 className="header__nav-heading h6">Site Navigation</h2>
              <ul className="header__nav">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/createblog"}>Add blog</Link>
                </li>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/aboutus"}>About</Link>
                </li>
                <li>
                  <Link to={"/myblogs"}>My Blogs</Link>
                </li>
              </ul>
              <a
                title="Close Menu"
                className="header__overlay-close close-mobile-menu"
                onClick={toggleNav}
              >
                Close
              </a>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;

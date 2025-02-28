import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pxShow = 500;

  const handleScroll = () => {
    if (window.scrollY >= pxShow) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <footer className="s-footer">
        <div className="s-footer__main">
          <div className="row">
            <div className="col-two md-four mob-full s-footer__sitelinks">
              <h4>Quick Links</h4>
              <ul className="s-footer__linklist">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/createblog">Add Blog</Link>
                </li>
                <li>
                  <Link to="/aboutus">About</Link>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#privacy-policy">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="col-two md-four mob-full s-footer__archives">
              <h4>Archives</h4>
              <ul className="s-footer__linklist">
                <li>
                  <a >January 2018</a>
                </li>
                <li>
                  <a >December 2017</a>
                </li>
                <li>
                  <a >November 2017</a>
                </li>
                <li>
                  <a>October 2017</a>
                </li>
                <li>
                  <a>September 2017</a>
                </li>
                <li>
                  <a>August 2017</a>
                </li>
              </ul>
            </div>

            <div className="col-two md-four mob-full s-footer__social">
              <h4>Social</h4>
              <ul className="s-footer__linklist">
                <li>
                  <a >Facebook</a>
                </li>
                <li>
                  <a >Instagram</a>
                </li>
                <li>
                  <a >Twitter</a>
                </li>
                <li>
                  <a >Pinterest</a>
                </li>
                <li>
                  <a >Google+</a>
                </li>
                <li>
                  <a >LinkedIn</a>
                </li>
              </ul>
            </div>

            <div className="col-five md-full end s-footer__subscribe">
              <h4>Our Newsletter</h4>
              <p>
                Stay updated with our latest news and insights. Subscribe to our
                newsletter.
              </p>
              <div className="subscribe-form">
                <form id="mc-form" className="group">
                  <input
                    type="email"
                    className="email"
                    id="mc-email"
                    placeholder="Email Address"
                    required
                  />
                  <input type="button" name="subscribe" value="Send" />
                  <label className="subscribe-message"></label>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="s-footer__bottom">
          <div className="row">
            <div className="col-full">
              <div className={`go-top ${isVisible ? "link-is-visible" : ""}`}>
                <a
                  className="smoothscroll"
                  title="Back to Top"
                  href="#top"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  ↑
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

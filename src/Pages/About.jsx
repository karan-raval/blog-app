import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Popularpost from "../Components/Popularpost";

function About() {
  return (
    <>
      <Header />
      <section className="s-content s-content--narrow">
        <div className="row">
          <div className="s-content__header col-full">
            <h1 className="s-content__header-title">Learn More About Us.</h1>
          </div>

          <div className="s-content__media col-full">
            <div className="s-content__post-thumb">
              <img
                src="https://preview.colorlib.com/theme/philosophy/images/thumbs/about/about-2000.jpg.webp"
                sizes="(max-width: 2000px) 100vw, 2000px"
                alt=""
              />
            </div>
          </div>

          <div className="col-full s-content__main">
            <p className="lead">
              A Dynamic Platform for Blogging Enthusiasts
              <br />
              <br />
              The Blog Application is a user-friendly, feature-rich platform for
              creating, managing, and sharing blogs. With secure authentication,
              only registered users can create, edit, or delete content,
              ensuring a professional and safe environment. It includes features
              like blog whitelisting, search, and filter options, making it easy
              to organize and access content. The fully responsive design
              ensures seamless performance across all devices, and real-time
              updates enhance user experience. Perfect for writers and
              enthusiasts, this app simplifies blogging while maintaining a
              dynamic, intuitive interface.
            </p>

            <div className="row block-1-2 block-tab-full">
              <div className="col-block">
                <h3 className="quarter-top-margin">Who We Are.</h3>
                <br />
                <p>
                  We are a passionate team of storytellers and technologists
                  dedicated to creating a space where ideas come to life,
                  connecting people globally through impactful and accessible
                  blogging tools.
                </p>
              </div>

              <div className="col-block">
                <h3 className="quarter-top-margin">Our Mission.</h3>
                <br />
                <p>
                  To empower individuals to share their stories and ideas
                  through a secure, user-friendly blogging platform that fosters
                  creativity, connection, and self-expression.
                </p>
              </div>

              <div className="col-block">
                <h3 className="quarter-top-margin">Our Vision.</h3>
                <br />
                <p>
                  To become the leading platform for bloggers worldwide,
                  inspiring impactful storytelling through innovation,
                  inclusivity, and exceptional user experiences.
                </p>
              </div>

              <div className="col-block">
                <h3 className="quarter-top-margin">Our Values.</h3>
                <br />
                <p>
                  We prioritize creativity, inclusivity, and a user-first
                  approach to empower diverse voices through blogging.
                  Integrity, security, and simplicity guide our platform,
                  ensuring a seamless and secure experience. We embrace
                  innovation and continuous growth to stay ahead and serve our
                  community better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Popularpost />
      <Footer />
    </>
  );
}

export default About;

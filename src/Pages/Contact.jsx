import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../App.css";
import shutterbug from "../assets/images/shutterbug-400.jpg";
import jump from "../assets/images/jump-400.jpg";
import wheel from "../assets/images/wheel-400.jpg";
import cookies from "../assets/images/cookies-150.jpg";
import beetle from "../assets/images/beetle-150.jpg";
import tulips from "../assets/images/tulips-150.jpg";
import salad from "../assets/images/salad-150.jpg";
import lamp from "../assets/images/lamp-400.jpg";
import Popularpost from "../Components/Popularpost";

function Contact() {
  return (
    <>
      <Header />
      <section className="s-content s-content--narrow">
        <div className="row">
          <div className="s-content__header col-full">
            <h1 className="s-content__header-title">
              Feel Free To Contact Us.
            </h1>
          </div>

          <div className="s-content__media col-full">
            <div id="map-wrap">
              <div id="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8287.584861547493!2d70.74256092330599!3d22.289374306600195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbe7a603e1b9%3A0x7da60912bfabbf4a!2sMunjka%2C%20Rajkot%2C%20Gujarat%20360005!5e0!3m2!1sen!2sin!4v1735551322233!5m2!1sen!2sin"
                  width="919"
                  height="420"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="col-full s-content__main">
            <p className="lead">
              Lorem ipsum Deserunt est dolore Ut Excepteur nulla occaecat magna
              occaecat Excepteur nisi esse veniam dolor consectetur minim qui
              nisi esse deserunt commodo ea enim ullamco non voluptate
              consectetur minim aliquip Ut incididunt amet ut cupidatat.
            </p>

            <p>
              Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat
              nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
              incididunt adipisicing veniam velit id fugiat enim mollit amet
              anim veniam dolor dolor irure velit commodo cillum sit nulla
              ullamco magna amet magna cupidatat qui labore cillum sit in tempor
              veniam consequat non laborum adipisicing aliqua ea nisi sint ut
              quis proident ullamco ut dolore culpa occaecat ut laboris in sit
              minim cupidatat ut dolor voluptate enim veniam consequat occaecat
              fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua
              laborum mollit quis nostrud sed sed.
            </p>

            <div className="row">
              <div className="col-six tab-full">
                <h3>Where to Find Us</h3>

                <p>
                  1600 Amphitheatre Parkway
                  <br />
                  Mountain View, CA
                  <br />
                  94043 US
                </p>
              </div>

              <div className="col-six tab-full">
                <h3>Contact Info</h3>

                <p>
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                  >
                    Karanraval424@gmail.com
                  </a>{" "}
                  <br />
                  Phone: (+91) 63547 15134
                </p>
              </div>
            </div>

            <h3>Say Hello.</h3>

            <form name="cForm" id="cForm" method="post" action="">
              <fieldset>
                <div className="form-field">
                  <input
                    name="cName"
                    type="text"
                    id="cName"
                    className="full-width"
                    placeholder="Your Name"
                  />
                </div>

                <div className="form-field">
                  <input
                    name="cEmail"
                    type="text"
                    id="cEmail"
                    className="full-width"
                    placeholder="Your Email"
                  />
                </div>

                <div className="form-field">
                  <input
                    name="cWebsite"
                    type="text"
                    id="cWebsite"
                    className="full-width"
                    placeholder="Website"
                  />
                </div>

                <div className="message form-field">
                  <textarea
                    name="cMessage"
                    id="cMessage"
                    className="full-width"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit btn btn--primary full-width"
                >
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </section>

      <Popularpost />
      <Footer />
    </>
  );
}

export default Contact;

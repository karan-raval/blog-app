import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import standard1000 from "../assets/images/standard-1000.jpg";
import wheel150 from "../assets/images/wheel-150.jpg";
import shutterbug150 from "../assets/images/shutterbug-150.jpg";
import beetle150 from "../assets/images/beetle-150.jpg";
import salad150 from "../assets/images/salad-150.jpg";
import cookies150 from "../assets/images/cookies-150.jpg";
import user1 from "../assets/images/user-01.jpg";
import user3 from "../assets/images/user-03.jpg";
import user4 from "../assets/images/user-04.jpg";
import user2 from "../assets/images/user-02.jpg";
import tulips150 from "../assets/images/tulips-150.jpg";


const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://blog-project-backend-6kzr.onrender.com//allblogs/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="s-pageheader">
        <Header />
      </div>
      <section className="s-content s-content--narrow s-content--no-padding-bottom">
        <article className="row format-standard">
          <div className="s-content__header col-full">
            <h1 className="s-content__title">{blog.title}</h1>
            <ul className="s-content__header-meta">
              <li className="date">{blog.date}</li>
              <li className="cat">
                In &nbsp;
                <a>{blog.category}</a>
              </li>
            </ul>
          </div>

          <div className="s-content__media col-full">
            <div className="s-content__post-thumb">
              <img src={blog.image} alt={blog.title} />
            </div>
          </div>

          <div className="col-full s-content__main">
            <p className="lead">{blog.description}</p>
          </div>
        </article>

        <div className="comments-wrap">
          <div id="comments" className="row">
            <div className="col-full">
              <h3 className="h2">5 Comments</h3>

              <ol className="commentlist">
                <li className="depth-1 comment">
                  <div className="comment__avatar">
                    <img
                      width="50"
                      height="50"
                      className="avatar"
                      src={user1}
                      alt=""
                    />
                  </div>

                  <div className="comment__content">
                    <div className="comment__info">
                      <cite>Itachi Uchiha</cite>

                      <div className="comment__meta">
                        <time className="comment__time">
                          Dec 16, 2017 @ 23:05
                        </time>
                        <a className="reply">Reply</a>
                      </div>
                    </div>

                    <div className="comment__text">
                      <p>
                        Adhuc quaerendum est ne, vis ut harum tantas noluisse,
                        id suas iisque mei. Nec te inani ponderum vulputate,
                        facilisi expetenda has et. Iudico dictas scriptorem an
                        vim, ei alia mentitum est, ne has voluptua praesent.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="thread-alt depth-1 comment">
                  <div className="comment__avatar">
                    <img
                      width="50"
                      height="50"
                      className="avatar"
                      src={user4}
                      alt=""
                    />
                  </div>

                  <div className="comment__content">
                    <div className="comment__info">
                      <cite>John Doe</cite>

                      <div className="comment__meta">
                        <time className="comment__time">
                          Dec 16, 2017 @ 24:05
                        </time>
                        <a className="reply">Reply</a>
                      </div>
                    </div>

                    <div className="comment__text">
                      <p>
                        Sumo euismod dissentiunt ne sit, ad eos iudico qualisque
                        adversarium, tota falli et mei. Esse euismod urbanitas
                        ut sed, et duo scaevola pericula splendide. Primis
                        veritus contentiones nec ad, nec et tantas semper
                        delicatissimi.
                      </p>
                    </div>
                  </div>

                  <ul className="children">
                    <li className="depth-2 comment">
                      <div className="comment__avatar">
                        <img
                          width="50"
                          height="50"
                          className="avatar"
                          src={user3}
                          alt=""
                        />
                      </div>

                      <div className="comment__content">
                        <div className="comment__info">
                          <cite>Kakashi Hatake</cite>

                          <div className="comment__meta">
                            <time className="comment__time">
                              Dec 16, 2017 @ 25:05
                            </time>
                            <a className="reply">Reply</a>
                          </div>
                        </div>

                        <div className="comment__text">
                          <p>
                            Duis sed odio sit amet nibh vulputate cursus a sit
                            amet mauris. Morbi accumsan ipsum velit. Duis sed
                            odio sit amet nibh vulputate cursus a sit amet
                            mauris
                          </p>
                        </div>
                      </div>

                      <ul className="children">
                        <li className="depth-3 comment">
                          <div className="comment__avatar">
                            <img
                              width="50"
                              height="50"
                              className="avatar"
                              src={user4}
                              alt=""
                            />
                          </div>

                          <div className="comment__content">
                            <div className="comment__info">
                              <cite>John Doe</cite>

                              <div className="comment__meta">
                                <time className="comment__time">
                                  Dec 16, 2017 @ 25:15
                                </time>
                                <a className="reply">Reply</a>
                              </div>
                            </div>

                            <div className="comment__text">
                              <p>
                                Investigationes demonstraverunt lectores legere
                                me lius quod ii legunt saepius. Claritas est
                                etiam processus dynamicus, qui sequitur
                                mutationem consuetudium lectorum.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="depth-1 comment">
                  <div className="comment__avatar">
                    <img
                      width="50"
                      height="50"
                      className="avatar"
                      src={user2}
                      alt=""
                    />
                  </div>

                  <div className="comment__content">
                    <div className="comment__info">
                      <cite>Shikamaru Nara</cite>

                      <div className="comment__meta">
                        <time className="comment-time">
                          Dec 16, 2017 @ 25:15
                        </time>
                        <a className="reply" href="#">
                          Reply
                        </a>
                      </div>
                    </div>

                    <div className="comment__text">
                      <p>
                        Typi non habent claritatem insitam; est usus legentis in
                        iis qui facit eorum claritatem.
                      </p>
                    </div>
                  </div>
                </li>
              </ol>

              <div className="respond">
                <h3 className="h2">Add Comment</h3>

                <form
                  name="contactForm"
                  id="contactForm"
                  method="post"
                  action=""
                >
                  <fieldset>
                    <div className="form-field">
                      <input
                        name="cName"
                        type="text"
                        id="cName"
                        className="full-width"
                        placeholder="Your Name"
                        value=""
                      />
                    </div>

                    <div className="form-field">
                      <input
                        name="cEmail"
                        type="text"
                        id="cEmail"
                        className="full-width"
                        placeholder="Your Email"
                        value=""
                      />
                    </div>

                    <div className="form-field">
                      <input
                        name="cWebsite"
                        type="text"
                        id="cWebsite"
                        className="full-width"
                        placeholder="Website"
                        value=""
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
                      className="submit btn--primary btn--large full-width"
                    >
                      Submit
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* popular post */}
      <Footer />
    </>
  );
};

export default SingleBlog;

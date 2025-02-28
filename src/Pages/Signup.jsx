import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../assets/css/Login.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state);

    try {
      const response = await fetch(`https://blog-project-backend-6kzr.onrender.com/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("User added successfully:", result);
        navigate("/login");
      } else {
        console.error("Failed to add movie:", result.message);
      }
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <Header />
      {/* <div className="body">
      <div className="login-container">
        <h1>Signup</h1>
        <form id="loginForm" action="signup" method="POST" onSubmit={handleSubmit} >
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text"  name="username" required  onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="username">Email</label>
            <input type="email" name="email" required  onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password"  name="password" required  onChange={handleChange} />
          </div>
          <button type="submit" className="button">Register</button>
        </form>
      <p>Alredy have account ? <Link to={'/login'}>Login</Link></p>
      </div>
      </div> */}
      <ToastContainer
        className="toast-container-custom"
        position="top-left"
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <section className="s-content--narrow">
        <div className="comments-wrapp">
          <div id="comments" className="row">
            <div className="col-full">
              <div className="respond">
                <h3 className="h2">Register Here </h3>

                <form onSubmit={handleSubmit}>
                  <fieldset>
                    <div className="form-field">
                      <input
                        name="username"
                        required
                        onChange={handleChange}
                        type="text"
                        className="full-width"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="form-field">
                      <input
                        type="email"
                        name="email"
                        required
                        onChange={handleChange}
                        className="full-width"
                        placeholder="Your Email"
                      />
                    </div>

                    <div className="form-field">
                      <input
                        onChange={handleChange}
                        name="password"
                        type="password"
                        className="full-width"
                        placeholder="Enter Password"
                      />
                    </div>

                    <button
                      type="submit"
                      className="submit btn--primary btn--large full-width"
                    >
                      Submit
                    </button>
                  </fieldset>
                </form>
                <br />
                <br />
                <p>Alredy have account ? <Link to={'/login'}>Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signup;

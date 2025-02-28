import { React, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Input from '@mui/material/Input';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import '../assets/css/createblog.css'
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";


const CreateBlog = () => {
  const [token, setToken] = useState((localStorage.getItem("Token")) || null);
  const [category, setCategory] = useState("");
  // console.log(token)

  const today = new Date();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = monthNames[today.getMonth()];
  const date = today.getDate();
  const year = today.getFullYear();

  let all = date + " " + month + " " + year;

  const handleChange = async (e) => {
    let { name, value } = e.target;
    setFromdata({ ...fromdata, [name]: value });
  };

  const handleSort = (event) => {
    const selectedCategory = event.target.value;
    setFromdata((prevData) => ({
      ...prevData,
      category: selectedCategory,
    }));
  };

  const navigate = useNavigate();
  const [fromdata, setFromdata] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    date: all
  });



  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(fromdata)

    try {
      const response = await fetch(`https://blog-project-backend-6kzr.onrender.com//createblog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(fromdata),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Blog submitted successfully!");
        setTimeout(() => {
          navigate("/");
        }, 4000);
      } else {
        console.error("Failed to add BLog Data:", result.message);
        toast.success("Failed to add BLog Data:", result.message);
      }
    } catch (error) {
      console.error("Error during submission:", error);
      toast.success("Error during submission !", error);
    }

    setFromdata({
      title: "",
      description: "",
      image: "",
      category: "",
    });
  };

  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
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
                <h3 className="h2">Write Your Blog </h3>

                <form onSubmit={handleSubmit}>
                  <fieldset>
                    <div className="form-field">
                      <input
                        onChange={handleChange}
                        name="title"
                        type="text"
                        className="full-width"
                        placeholder="Blog Title"
                      />
                    </div>

                    <div className="form-field">
                      <input
                        onChange={handleChange}
                        name="description"
                        type="text"
                        className="full-width"
                        placeholder="Blog Description"
                      />
                    </div>

                    <div className="form-field" >
                      <Box>
                        <FormControl
                          size="big"
                          fullWidth
                          sx={{ marginBottom: 2, fontSize: '2rem', color: 'Gray' }}
                        >
                          <InputLabel
                            id="demo-simple-select-label"
                            sx={{ fontSize: '1.5rem', color: 'Gray' }}
                            name='category'
                          >
                            Categories
                          </InputLabel>
                          <Select
                            value={fromdata.category}
                            onChange={handleSort}
                            sx={{ fontSize: '1.6rem', color: '#f1f1f5' }}
                          >
                            <MenuItem value={"Lifestyle"} sx={{ fontSize: '1.2rem' }}>Lifestyle</MenuItem>
                            <MenuItem value={"Health"} sx={{ fontSize: '1.2rem' }}>Health</MenuItem>
                            <MenuItem value={"Family"} sx={{ fontSize: '1.2rem' }}>Family</MenuItem>
                            <MenuItem value={"Management"} sx={{ fontSize: '1.2rem' }}>Management</MenuItem>
                            <MenuItem value={"Travel"} sx={{ fontSize: '1.2rem' }}>Travel</MenuItem>
                            <MenuItem value={"Work"} sx={{ fontSize: '1.2rem' }}>Work</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>

                    </div>
                    <div className="form-field">
                      <input
                        onChange={handleChange}
                        name="image"
                        type="text"
                        className="full-width"
                        placeholder="Your Image Link"
                      />
                    </div>

                    <button
                      type="submit"
                      className="submit btn--primary btn--large full-width">
                      Submit
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CreateBlog;

import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const UserBlogs = () => {
    const navigate=useNavigate()
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
    const [token, setToken] = useState((localStorage.getItem("Token")) || null);
  
useEffect(() => {
  const fetchUserBlogs = async () => {
    const storedToken = localStorage.getItem("Token");

    if (!storedToken) {
      console.error("❌ No token found. Please log in again.");
      setLoading(false);
      return;
    }


    try {
      const response = await fetch("https://blog-project-backend-6kzr.onrender.com/myBlogs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${storedToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch user blogs: ${response.status}`);
      }

      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching user blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchUserBlogs();
}, []);


const handleDelete = async (id) => {
  try {
    const response = await fetch(`https://blog-project-backend-6kzr.onrender.com/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      throw new Error("Failed to delete blog");
    }

    // Update state to remove the deleted blog
    setBlogs((prevBlogs) => prevBlogs.filter(blog => blog._id !== id));

  } catch (error) {
    console.error("Error deleting blog:", error);
  }
};


  if (loading) {
    return <div>Loading...</div>;
  }

  const handleEdit = (id) => {
    navigate(`/EditBlog/${id}`); 
  };

  return (
    <>
      <Header />
      <section className="s-content">
        <div className="row masonry-wrap">
          <div className="masonry" id="sy3">
            <div className="grid-sizer"></div>
            {blogs.map((el) => (
              <article
                key={el._id}
                className="masonry__brick entry format-standard aos-init aos-animate"
                data-aos="fade-up"
                id={`sy${el.id}`}
              >
                <div className="entry__thumb">
                  <a className="entry__thumb-link">
                    <img src={el.image} alt="" />
                  </a>
                </div>

                <div className="entry__text">
                  <div className="entry__header">
                    <div className="entry__date">
                      <a>{el.date}</a>
                    </div>
                    <h1 className="entry__title">
                        {el.title}

                    </h1>
                  </div>
                  <div className="entry__excerpt">
                    <p>
                          {el.description}

                    </p>
                  </div>
                  <br />
                  <div className="entry__meta">
                    <span className="entry__meta-links">
                      <a>{el.category}</a>
                    </span>
                  </div>
                  <br /><br />
                  <div className="entry__actions">
                  <button  className="edit-btn" onClick={() => handleEdit(el._id)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(el._id)}>Delete</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UserBlogs;
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const OtpForm = () => {
  const navigate=useNavigate()
    const [fpass, setfpass] = useState({
        newpassword: "",
        email: "",
        otp: "",
    });
    
    const handleChangee = (e) => {
        const { name, value } = e.target;
        setfpass({ ...fpass, [name]: value });
    };
    const handleforgotpassword = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post("https://blog-project-backend-6kzr.onrender.com/resetPassword", fpass);
    
          if (response.status === 200) {
            toast.success(response.data.msg || "Password reset successfully!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            navigate("/login"); 
          }
        } catch (error) {
          console.error("Error:", error);
    
          const errorMsg =
            error.response?.data?.msg || "An error occurred. Please try again.";
          toast.error(errorMsg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      };
  return (
    
    <form onSubmit={handleforgotpassword}>
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
      <TextField
        required
        margin="dense"
        name="email"
        label="Email"
        type="email"
        fullWidth
        variant="standard"
        onChange={handleChangee}
        className="input-field"
        InputLabelProps={{
          style: { fontSize: "1.5rem" },
        }}
      />
      <TextField
        required
        margin="dense"
        name="otp"
        label="OTP"
        type="text"
        fullWidth
        variant="standard"
        onChange={handleChangee}
        className="input-field"
        InputLabelProps={{
          style: { fontSize: "1.5rem" },
        }}
      />
      <TextField
        required
        margin="dense"
        name="newPassword"
        label="New Password"
        type="password"
        fullWidth
        variant="standard"
        onChange={handleChangee}
        className="input-field"
        InputLabelProps={{
          style: { fontSize: "1.5rem" },
        }}
      />
      <Button type="submit" variant="contained" color="primary" className="hover-button">
        Forgot Password
      </Button>
    </form>
  );
};

export default OtpForm; 
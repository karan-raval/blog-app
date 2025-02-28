import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./forgotpassword.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OtpForm from "./OtpForm";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Forgotpassword = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = useState({
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const [showOtpFields, setShowOtpFields] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("https://blog-project-backend-6kzr.onrender.com/forgotPassword", state);
      console.log("Response:", response);
  
      if (response.status === 200) {
        toast.success(response.data.msg || "OTP sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setShowOtpFields(true); 
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
    <>
      <p onClick={handleClickOpen}>Forgot Your Password</p>
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
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className="dialog-animation"
      >
        <DialogTitle className="dialog-title">Forgot Password</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              required
              margin="dense"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              onChange={handleChange}
              className="input-field"
              InputLabelProps={{
                style: { fontSize: "1.5rem" },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="hover-button"
            >
              Submit
            </Button>
          </form>

          {showOtpFields && (
            <OtpForm/>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Forgotpassword;

import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import DialogTitle from "@mui/material/DialogTitle";
import Forgotpassword from "./Forgotpassword";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Popover = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState({
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form State:", state);
  
    try {
      const response = await fetch(`https://blog-project-backend-6kzr.onrender.com/changepassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });
  
      const result = await response.json(); // Parse the response
      console.log("Response Status:", response.status);
      console.log("Response Data:", result);
  
      if (response.ok) {
        // Success alert
        toast.success(result.msg || "Password changed successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setOpen(false); // Close the dialog after success
      } else {
        // Error alert for specific backend responses
        toast.error(result.msg || "Password change failed!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error("Error during submission:", error);
  
      // Generic error alert
      toast.error("An error occurred. Please try again.", {
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

      <p onClick={handleClickOpen}>Change Your Password</p>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <form action="" onSubmit={handleSubmit}>
            <TextField
              autoFocus
              required
              // margin="dense"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              onChange={handleChange}
              InputLabelProps={{
                style: { fontSize: "1.5rem" },
              }}
            />
            <TextField
              required
              // margin="dense"
              name="oldpassword"
              label="Old Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={handleChange}
              InputLabelProps={{
                style: { fontSize: "1.5rem" },
              }}
            />
            <TextField
              required
              // margin="dense"
              name="newpassword"
              label="New Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={handleChange}
              InputLabelProps={{
                style: { fontSize: "1.5rem" },
              }}
            />
            <TextField
              required
              // margin="dense"
              name="confirmpassword"
              label="Confirm Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={handleChange}
              InputLabelProps={{
                style: { fontSize: "1.5rem" },
              }}
            />
            <br />
            <br />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
          <br />
          <Forgotpassword />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Popover;

import { Snackbar } from '@mui/material';
import React from 'react'
import {Alert} from "@mui/lab"

const Popup = ({message,setShowPopup,showPopup}) => {
  const vertical = "top"
  const horizontal = "right"
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowPopup(false);
    // dispatch(underControl());
    // dispatch(underStudentControl());
  };
  return (
    <div>
      <Snackbar
        open={showPopup}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        {message === "Done Successfully" ? (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {message}
          </Alert>
        )}
      </Snackbar>
    </div>
  );
}

export default Popup
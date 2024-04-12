import React from "react";
import {CheckCircle} from "@mui/icons-material";
import "./RequestSuccess.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const RequestSuccess = () => {
  return (
    <div className="orderSuccess">
      <CheckCircle />

      <Typography>Your Request has been sent successfully! </Typography>
      <h3>Wait for response!You will notify soon</h3>
      <Link to="/dashboard/myrequests">View your Requests</Link>
    </div>
  );
};

export default RequestSuccess;

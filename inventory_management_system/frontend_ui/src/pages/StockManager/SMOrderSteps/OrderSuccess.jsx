import React from "react";
import {CheckCircle} from "@mui/icons-material";
import "./OrderSuccess.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <CheckCircle />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/dashboard/myorders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;

import React, { Fragment, useEffect, useState, useRef } from "react";
// import "./ReqInventoryDetail.css";
import { Icon } from "@iconify/react";
import {AccountTree} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import Page from "../../../components/Page";
import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import { Grid, Typography, Button, Card } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
///////////---QR Code----///////////////
import QRCode from "qrcode";
import {
  getRequestDetails,
  clearErrors,
  updateRequest,
} from "../../../actions/reqInventoryAction";
import { UPDATE_INVENTORYORDER_RESET } from "../../../constants/reqInventoryConstants";
import Loader from "../../../components/Loader/Loader";
import { useAlert } from "react-alert";
import "./processRequest.css";
//////////////date picker//////////////
import DatePicker from "sassy-datepicker";
////////////////////////////
const columns = [
  {
    field: "id",
    headerName: "#No",
    minWidth: 50,
    flex: 0.3,
    backgroundColor: "lightgray",
  },
  {
    field: "name",
    headerName: "Product Name",
    minWidth: 150,
    flex: 0.5,
    backgroundColor: "lightgray",
  },
  {
    field: "qty",
    headerName: "Quantity",
    minWidth: 150,
    flex: 0.5,
  },
];

const ProcessRequest = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const MoveBack = () => {
    //going to previous page by using navigate -1
    //and we can go forward by using 1
    navigate(-1);
  };
  const { request, error, loading } = useSelector(
    (state) => state.reqInventoryDetails
  );
  const { error: updateError, isUpdated } = useSelector(
    (state) => state.reqInventory
  );
  /////////////////////date /////////////
  const [returnDate, setReturnDate] = useState("");
  console.log(returnDate);
  ///////////////////// /////////////
  const dispatch = useDispatch();
  const alert = useAlert();
  const updateRequestSubmitHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_546uk9a",
        "template_enc0b4x",
        form.current,
        "YMs3ef2fvu8QUd8nC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    dispatch(updateRequest(id, status, returnDate));
  };
  ///////////////////when inventory return back ////////////
  const updateInventoryReturn = (e) => {
    e.preventDefault();
    dispatch(updateRequest(id, status, ""));
  };

  ///fro QR code////////
  const [src, setSrc] = useState("");
  const [text, setText] = useState("hi");

  var orderItems = ".";
  if (loading === false) {
    orderItems = `Inventory ID: ${request && request._id}\nCategory:${
      request && request.department
    }\nDelivered At:${
      request && request.deliveredAt.substring(0, 16)
    }\n---User Info---\nUser Name: ${
      request && request.user && request.user.name
    }\nUser Email: ${request && request.user && request.user.email}`;
  }

  //////////////////
  useEffect(() => {
    setText(
      `${orderItems}\n[Inventory Return Date: ${returnDate.substring(0, 16)}]`
    );

    QRCode.toDataURL(text).then(setSrc);
    console.log(text);
  }, [text, returnDate, orderItems]);

  useEffect(() => {
    ////qr /////

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Request status Updated Successfully!");
      dispatch({ type: UPDATE_INVENTORYORDER_RESET });
    }

    dispatch(getRequestDetails(id));
  }, [dispatch, alert, error, id, isUpdated, updateError]);

  const rows = [];

  if (loading === false) {
    request &&
      request.orderItems &&
      request.orderItems.map((item, index) => {
        rows.push({
          id: index + 1,
          qty: item.quantity,
          name: item.name,
        });
        return 1;
      });
  }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Page title="Request Inventory Details" />
          <Card>
            <div className="orderDetailsPage">
              <div className="orderDetailsContainer">
                <Typography>User Info</Typography>
                <div className="orderDetailsContainerBox">
                  <div>
                    <p>
                      Name:{" "}
                      <span style={{ fontWeight: "normal" }}>
                        {request && request.user && request.user.name}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p>
                      Phone:{" "}
                      <span style={{ fontWeight: "normal" }}>
                        {request && request.user && request.user.phoneNumber}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p>
                      Email:{" "}
                      <span style={{ fontWeight: "normal" }}>
                        {request && request.user && request.user.email}
                      </span>
                    </p>
                  </div>
                </div>

                <Typography>Request Status</Typography>
                <div className="orderDetailsContainerBox">
                  <div>
                    <p
                      className={
                        request &&
                        request.requestStatus &&
                        request.requestStatus === "Delivered"
                          ? "greenColor"
                          : "redColor"
                      }
                    >
                      {request && request.requestStatus}
                    </p>
                  </div>
                </div>
                <Typography>Return Date</Typography>
                <br />
                <DatePicker
                  minDate={new Date()}
                  onChange={(date) => setReturnDate(date.toString())}
                />
              </div>

              <div className="orderDetailsCartItems">
                <h2 style={{ font: "500 1.9vmax Roboto" }}>Requested Items</h2>
                <br />
                <Grid container spacing={3}>
                  <Grid item xs={8} sm={6}>
                    <DataGrid
                      backgroundColor="lightgray"
                      rows={rows}
                      columns={columns}
                      pageSize={10}
                      disableSelectionOnClick
                      className="myOrdersTable"
                      autoHeight
                      sx={{
                        boxShadow: 2,
                        border: 2,
                        borderColor: "secondary.light",
                        "& .MuiDataGrid-cell:hover": {
                          color: "info.main",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
                <br />
                <div className="detailsBlock-1">
                  <h2 style={{ font: "500 1.9vmax Roboto" }}>
                    Inventory QR code
                  </h2>
                  <img src={src} alt="qr code" width="150" height="150" />
                </div>
              </div>
            </div>
            <div
              style={{
                display:
                  request && request.requestStatus === "Delivered"
                    ? "none"
                    : "block",
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <form
                    ref={form}
                    className="updateOrderForm"
                    onSubmit={updateRequestSubmitHandler}
                  >
                    <div>
                      <AccountTreeIcon />
                      <select onChange={(e) => setStatus(e.target.value)}>
                        <option value="">
                          Update Inventory Request Status
                        </option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </div>
                    <input
                      type="hidden"
                      name="to_name"
                      value={request && request.user && request.user.name}
                    />
                    <input
                      type="hidden"
                      name="user_email"
                      value={request && request.user && request.user.email}
                    />
                    <input
                      type="hidden"
                      name="message"
                      value={`Your request for inventory is updated.\nTo see the detail click on this link: \n http://localhost:3000/dashboard/myrequests`}
                    />
                    {/* ///////return date of inventory //// */}
                    <Button
                      id="createProductBtn"
                      variant="contained"
                      color="secondary"
                      startIcon={<Icon icon="clarity:process-on-vm-line" />}
                      type="submit"
                      disabled={
                        loading ? true : false || status === "" ? true : false
                      }
                    >
                      Proceed
                    </Button>
                  </form>
                </Grid>
              </Grid>
            </div>
            {/* ///////////////////////////////--when inventory return back--//////////////////////////////////////////////// */}
            <div
              style={{
                display:
                  request && request.requestStatus === "Delivered"
                    ? "block"
                    : "none",
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <div className="updateOrderForm">
                    <select onChange={(e) => setStatus(e.target.value)}>
                      <option value="">Update Inventory Status</option>
                      <option value="Recieved">Recieved</option>
                    </select>
                    <br />
                    <br />
                    <Button
                      id="createProductBtn"
                      variant="contained"
                      color="secondary"
                      startIcon={<Icon icon="clarity:process-on-vm-line" />}
                      type="submit"
                      onClick={updateInventoryReturn}
                      disabled={
                        loading ? true : false || status === "" ? true : false
                      }
                    >
                      Proceed
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </div>
            {/* ///////////////////////////////--when inventory return back--//////////////////////////////////////////////// */}
            <Button
              variant="contained"
              onClick={MoveBack}
              color="warning"
              style={{ margin: "60px" }}
            >
              <Icon icon="akar-icons:arrow-back" width="40" />
              Back to list
            </Button>
          </Card>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProcessRequest;

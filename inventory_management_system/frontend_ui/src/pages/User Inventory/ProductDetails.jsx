import { useAlert } from "react-alert";
import { Icon } from "@iconify/react";
import { Button, Card } from "@mui/material";
// import { addItemsToCart } from "../../actions/cartAction";
import Loader from "../../components/Loader/Loader";
import React, { Fragment, useEffect, useState } from "react";
// material
import { Container, Stack, Typography, CardContent } from "@mui/material";
// components
import Page from "../../components/Page";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import "./productDetails.css";
import { useNavigate } from "react-router-dom";
import { addItemsToCart } from "../../actions/cartAction";

///////////---QR Code----///////////////
import QRCode from "qrcode";

/////////////////////////////
const ProductDetails = () => {
  const [src, setSrc] = useState("");

  //Use the useParams hook to access the id match param
  //getting theid wich we are selecting in inventory
  // the useParam fetch the id from the url
  //we onnly get the paramater by( /:link ) if we set it by this
  const { id } = useParams();
  const navigate = useNavigate();
  const MoveBack = () => {
    //going to previous page by using navigate -1
    //and we can go forward by using 1
    navigate(-1);
  };
  const dispatch = useDispatch();
  const alert = useAlert();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  /////fro QR code////////
  var text = "hi";
  if (loading === false) {
    text = `Product Name: 
      ${product && product.name} 
      \nProduct ID: 
      ${id} 
      \nProduct Description: 
      ${product && product.description}
      \nProduct Status: 
      ${product && product.status}`;
  }

  useEffect(() => {
    ////qr /////
    QRCode.toDataURL(text).then(setSrc);

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert, text]);

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };
  const { cartItems } = useSelector((state) => state.cart);

  const addToCartHandler = () => {
    let dept = "";
    if (cartItems.length > 0) {
      dept = cartItems[0]["department"];
      console.log(dept);
      if (product.department === dept) {
        dispatch(addItemsToCart(id, quantity));
        alert.success("Item Added To Cart");
      } else {
        alert.error("Cannot Add! Only add from the same category");
      }
    }
    if (cartItems.length === 0) {
      dispatch(addItemsToCart(id, quantity));
      alert.success("Item Added To Cart");
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Page title="Products: Product Detail | Stokify">
            <Container>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={5}
              >
                <Typography variant="h4" gutterBottom>
                  Product Details
                </Typography>
              </Stack>
              <Card variant="filled" sx={{ minWidth: 275 }}>
                <CardContent className="card">
                  <div>
                    <div>
                      <h2>{product && product.name}</h2>
                      <p>Product ID# {product && product._id}</p>
                    </div>
                    <div>
                      <h4>
                        <h2>{product && product.description}</h2>
                      </h4>
                    </div>
                    <div>
                      <h2>Product QR code</h2>
                      <img src={src} alt="qr code" width="100" height="100" />
                    </div>

                    <div>
                      <div>
                        <div>
                          <h2>Quantity</h2>
                          <button onClick={decreaseQuantity} className="btn">
                            -
                          </button>
                          <input
                            type="number"
                            value={quantity}
                            style={{ width: "60px" }}
                            className="btn"
                          />
                          <button onClick={increaseQuantity} className="btn">
                            +
                          </button>
                        </div>
                      </div>
                      <br />
                      <Button
                        variant="contained"
                        color="info"
                        disabled={product && product.Stock < 1 ? true : false}
                        onClick={addToCartHandler}
                      >
                        <Icon icon="bx:bxs-cart-download" width="30" />
                        <div className="mbl">Add to Cart</div>
                      </Button>
                      <br /> <br />
                      <h2>
                        <b
                          className={
                            product && product.Stock < 1
                              ? "redColor"
                              : "greenColor"
                          }
                        >
                          {product && product.Stock < 1
                            ? "OutOfStock"
                            : "InStock"}
                        </b>
                      </h2>
                    </div>
                    <br />
                  </div>
                  <br />
                  <Button
                    size="small"
                    variant="contained"
                    onClick={MoveBack}
                    color="warning"
                  >
                    <Icon icon="akar-icons:arrow-back" width="40" />
                    <div className="mbl"> Back to list</div>
                  </Button>
                </CardContent>
              </Card>
            </Container>
          </Page>
        </Fragment>
      )}
    </Fragment>
  );
};
export default ProductDetails;

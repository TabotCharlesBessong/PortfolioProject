import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Activation, BestSelling, CreateShop, Events, FAQ, HomePage, Login, Products, ShopLogin, Signup } from "./pages";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/activate" element={<Activation />} />
        <Route path="/best-selling" element={<BestSelling />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/products" element={<Products />} />
        <Route path="/create-shop" element={<CreateShop />} />
        <Route path="/shop-login" element={<ShopLogin />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
  );
};

export default App;

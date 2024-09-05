import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ShopLoginComponent } from '../../../components';
import { useSelector } from "react-redux";

const ShopLogin = () => {
  const navigate = useNavigate();
  const { isSeller, seller } = useSelector((state) => state.seller);

  useEffect(() => {
    if (isSeller === true) {
      navigate(`/shop/${seller._id}`);
    }
  }, []);
  return (
    <div>
      <ShopLoginComponent />
    </div>
  );
}

export default ShopLogin
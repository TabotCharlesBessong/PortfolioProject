import React from "react";
import { useNavigate } from "react-router-dom";
import { CreateShopComponent } from "../../../components";
import { useSelector } from "react-redux";

const CreateShop = () => {
  const navigate = useNavigate();
  const { isSeller, seller } = useSelector((state) => state.seller);

  useEffect(() => {
    if (isSeller === true) {
      navigate(`/shop/${seller._id}`);
    }
  }, []);
  return (
    <div>
      <CreateShopComponent />
    </div>
  );
};

export default CreateShop;

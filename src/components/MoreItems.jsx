import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MoreItems = () => {
  const { cart } = useSelector((state) => state.cart);
  console.log("printing cart", cart);
  return (
    <div className="flex gap-5 mx-5 justify-around items-center">
      {cart.slice(0, 3).map((item, index) => (
        <Link
          to={`/product/${item._id}`}
          key={index}
          className=" flex flex-col items-center p-1 bg-deep-orange-100 rounded "
        >
          <img src={item.imgUrl[0]} alt="item" />
          <p>{item.productName}</p>
        </Link>
      ))}
    </div>
  );
};

export default MoreItems;

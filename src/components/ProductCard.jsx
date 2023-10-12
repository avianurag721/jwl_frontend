import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product._id}`}
      className=" p-4 flex flex-col bg-fuchsia-50  justify-center text-black rounded-md border-2 border-white  gap-2 m-5 w-[300px]"
    >
      <img
        className="flex justify-center items-center w-full"
        width={350}
        height={400}
        src={product.imgUrl[0]}
        alt="img"
      />
      <h1 className="">
        {" "}
        <span className="text-black font-bold">Name: </span>{" "}
        {product.productName}
      </h1>
      <h2>Company: {product.company}</h2>
      <div className=" flex justify-between">
        <h2 className="">Price:{product.productPrice} $</h2>
        <h2>Rating:{product.rating}</h2>
      </div>
    </Link>
  );
};

export default ProductCard;

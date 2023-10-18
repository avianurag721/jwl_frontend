import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { logout } from "../Services/operations/authApi";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  const { totalItems } = useSelector((state) => state.cart);
  return (
    <div className=" min-h-[1rem] justify-around items-center flex  bg-gray-700">
      <Link
        to="/"
        className=" p-2  rounded-md text-green-400 text-3xl   font-bold"
      >
        <p>Jewel</p>
      </Link>{" "}
      <div className=" flex  gap-8">
        <Link
          to="/cart"
          className=" text-white  flex  justify-center items-center gap-1"
        >
          <AiOutlineShoppingCart />
          <span className=" text-black bg-red-600 px-2 rounded-full">
            {totalItems || 0}
          </span>
        </Link>
        <Link to="/signup" className=" p-1 rounded-md bg-yellow-300">
          <p>Sign Up</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

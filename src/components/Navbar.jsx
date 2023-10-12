import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { logout } from "../Services/operations/authApi";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  //   console.log("token", token);
  //   console.log("user", user);
  return (
    <div className=" min-h-[1rem] justify-around items-center flex  bg-gray-700">
      <Link
        to="/"
        className=" p-2  rounded-md text-green-400 text-3xl   font-bold"
      >
        <p>Jewel</p>
      </Link>{" "}
      <Link to="/cart" className="  flex   justify-center items-center gap-1">
        <AiOutlineShoppingCart />
        <span className=" bg-red-600 rounded-full px-1">
          {cart.length || 0}
        </span>
      </Link>
    </div>
  );
};

export default Navbar;

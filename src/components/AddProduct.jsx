import React, { useState } from "react";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../Services/operations/products";

const AddProduct = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  console.log("token",token)
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    company: "",
    rating: "",
    featured:false
  });

  const { productName, price, company, rating, featured } = formData;
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    
    const logindata = {
      ...formData,token
    };
    console.log("logindata data", logindata);
     await addProduct(logindata);
    // console.log("afteraddingproduct",afteraddingproduct)
    navigate("/");
  };
  return (
    <div className=" flex flex-col justify-center items-center mx-5">
      <h1 className=" text-4xl mt-5">Add Product Details</h1>
      <form
        onSubmit={handleOnSubmit}
        className="flex justify-center rounded-md bg-slate-600 p-6 mt-10 w-full lg:w-4/12 flex-col gap-y-4"
      >
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-white">
            Product Name <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="productName"
            value={productName}
            onChange={handleOnChange}
            placeholder="Enter product Name "
            className="w-full rounded-[0.5rem]  p-[12px] text-black"
          />
        </label>
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-white">
            Enter Company Name <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="company"
            value={company}
            onChange={handleOnChange}
            placeholder="Enter Company Name "
            className="w-full rounded-[0.5rem]  p-[12px] text-black"
          />
        </label>
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-white">
            Enter Rating <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="number"
            name="rating"
            value={rating}
            onChange={handleOnChange}
            placeholder="Enter Rating "
            className="w-full rounded-[0.5rem]  p-[12px] text-black"
          />
        </label>
        <label className="relative">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-white">
            Enter price <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="number"
            name="price"
            value={price}
            onChange={handleOnChange}
            placeholder="Enter price"
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-black"
          />
        </label>
        <div className=" flex items-center gap-5">
          <input
            type="checkbox"
            name="featured"
            id="featured"
            value={featured}
            onChange={handleOnChange}
            className="rounded-[0.5rem] text-2xl   text-black"
          />
          <label
            className=" text-[0.875rem]  text-black font-bold"
            for="featured"
          >
            Featured ?
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 rounded-[8px]  bg-black py-[8px] px-[12px] font-medium text-yellow-200"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

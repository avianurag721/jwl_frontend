import React, { useState } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { signUp } from "../Services/operations/authApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [userType, setUserType] = useState("Customer");
  const { userName, email, password } = formData;
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!password) {
      toast.error("Passwords Dont Not Match");
      return;
    }
    const signupData = {
      ...formData,
      userType,
    };
    // console.log("signupData  d", signupData);
    dispatch(signUp(signupData));
    // console.log("aftersubmition signup result ", aftersubmition);/
    // setFormData({
    //   userName: "",
    //   email: "",
    //   password: "",
    // });
    navigate("/login");
  };

  return (
    <div className=" h-screen w-full flex bg-blue-gray-600 flex-col items-center">
      <h1 className=" text-4xl my-4 ">Sign Up</h1>
      <form
        onSubmit={handleOnSubmit}
        className="flex bg-gray-900 justify-center rounded-md bg-slate-600 p-2 lg:p-6  w-full lg:w-4/12 flex-col gap-y-4"
      >
        {/* handling user type  */}
        <div
          className={` w-full flex justify-around text-white bg-black  items-center  rounded-full p-2`}
        >
          <h2
            onClick={() => setUserType("Customer")}
            className={` ${
              userType === "Customer"
                ? " bg-brown-400 text-black"
                : " text-slate-300"
            } w-full cursor-pointer  font-bold p-2  lg:px-8 rounded-full`}
          >
            Customer
          </h2>
          <h2
            onClick={() => setUserType("Admin")}
            className={` ${
              userType === "Admin" ? "bg-brown-400 text-black" : " text-white"
            } w-full cursor-pointer  font-bold py-2 px-2 lg:px-8 rounded-full`}
          >
            Admin
          </h2>
        </div>
        <div className="flex gap-x-4">
          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-white">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="userName"
              value={userName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-black"
            />
          </label>
        </div>
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-white">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-black"
          />
        </label>
        <div className="flex gap-x-4">
          <label className="relative w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-white">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-black"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-[8px]  bg-black py-[8px] px-[12px] font-medium text-yellow-200"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;

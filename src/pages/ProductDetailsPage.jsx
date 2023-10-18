import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../Services/operations/products";
import { useState } from "react";
import { BiCartAdd } from "react-icons/bi";
import { addToCart } from "../redux/slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "@material-tailwind/react";
import MoreItems from "../components/MoreItems";

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const [product, setProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      console.log("hello");
      const productDetails = await getProductDetails(id);
      setProduct(productDetails?.data?.productDetails);
    })();
  }, [id]);

  const handleAddTocart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className=" flex min-h-screen  bg-blue-gray-800  flex-col items-center">
      <div className="  w-[90%] flex flex-col lg:flex-row ">
        {/* img section  ........... */}
        <div className=" w-[99%] lg:w-[50%]">
          <Carousel className="lg:rounded-xl my-2 h-5/6 ">
            <img
              src={product?.imgUrl[0]}
              alt="image1"
              className=" object-fill rounded-sm lg:rounded-md mt-5 mx-auto lg:h-[85%] w-[95%] h-full lg:w-3/4"
            />
            <img
              src={product?.imgUrl[1]}
              alt="image1"
              className="object-fill lg:rounded-md mt-5 mx-auto lg:h-[85%] w-[95%] h-full lg:w-3/4"
            />
            <img
              src={product?.imgUrl[2]}
              alt="image1"
              className=" object-fill lg:rounded-md mt-5 mx-auto lg:h-[85%] w-[95%] h-full lg:w-3/4"
            />
            {product?.imgUrl[3] && (
              <img
                src={product?.imgUrl[3]}
                alt="image1"
                className=" object-fill lg:rounded-md mt-5 mx-auto lg:h-[85%] w-[95%] h-full lg:w-3/4"
              />
            )}
            {product?.imgUrl[4] && (
              <img
                src={product?.imgUrl[4]}
                alt="image1"
                className=" lg:rounded-md mt-5 mx-auto lg:h-[85%] w-[95%] h-full lg:w-3/4"
              />
            )}
          </Carousel>
        </div>

        {/* description section.********* */}
        <div className=" flex flex-col gap-5 px-2  lg:w-[50%]">
          <div className="flex flex-col ">
            <div className=" text-xs lg:text-lg text-black py-4 flex flex-col w-full justify-center item-center">
              <h1>
                <span className=" text-white ">Descripton:</span>
                {product?.description
                  ? product?.description
                  : "Description Not Available"}
              </h1>
              <p>
                <span className=" text-white cap">Designed By:</span>
                {product?.designer
                  ? product?.designer
                  : "Designer Not Available"}
              </p>
              <p>
                <span className=" text-white cap"> About:</span>
                {product?.about
                  ? product?.about
                  : "Not much Info Available about this Product"}
              </p>
              <p>more...</p>
            </div>
            <p className=" text-white  w-[70%] lg:w-[30%]  rounded-md  py-4 text-3xl">
              Price:
              <span className=" text-yellow-200">
                {product?.productPrice}${" "}
              </span>
            </p>
            <div className=" lg:w-[45%] w-full ">
              <button
                onClick={() => handleAddTocart(product)}
                className=" flex w-full items-center justify-center gap-2 text-center text-white bg-black  rounded-md  py-2 font-bold"
              >
                Add To Cart
                <BiCartAdd className=" block" />
              </button>
            </div>
          </div>
          <div className=" flex flex-col h-80">
            <h1 className=" mx-auto  text-2xl text-white">Frequently Viewed</h1>
            <MoreItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../Services/operations/products";
import { useState } from "react";
import { BiCartAdd } from "react-icons/bi";
import { addToCart } from "../redux/slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const {cart}=useSelector((state)=>state.cart)
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
    console.log("priting cart in buttonclick ", cart);
    dispatch(addToCart(product));
  };
  return (
    <div className=" flex  flex-col items-center">
      <div className="  w-[90%] flex">
        {/* img section  ........... */}
        <div className=" w-[50%] py-3 bg-pink-600">
          <div>
            <div className=" flex justify-center items-center">
              <img
                src={product?.imgUrl[0]}
                height="300"
                width="400"
                alt="img"
                loading="eager"
              />
            </div>
          </div>
          <div>
            <div className=" flex justify-center items-center gap-5  py-2 bg-yellow-100">
              {product?.imgUrl[1] && (
                <div className=" bg-slate-50">
                  <img
                    src={product?.imgUrl[1]}
                    width="100"
                    height="100"
                    alt="img"
                    loading="lazy"
                  />
                </div>
              )}
              {product?.imgUrl[2] && (
                <div className=" bg-slate-50">
                  <img
                    src={product?.imgUrl[2]}
                    width="100"
                    height="100"
                    alt="img"
                    loading="lazy"
                  />
                </div>
              )}
              {product?.imgUrl[3] && (
                <div className=" bg-slate-50">
                  <img
                    src={product?.imgUrl[3]}
                    width="100"
                    height="100"
                    alt="img"
                    loading="lazy"
                  />
                </div>
              )}
              {product?.imgUrl[4] && (
                <div className=" bg-slate-50">
                  <img
                    src={product?.imgUrl[3]}
                    width="100"
                    height="100"
                    alt="img"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* description section.********* */}
        <div className=" flex flex-col justify-center gap-5 px-2 bg-yellow-600 w-[50%]">
          <div className="flex flex-col text-left justify-center item-center">
            <h1>
              Descripton:{" "}
              {product?.description
                ? product?.description
                : "Description Not Available"}{" "}
            </h1>
            <p>
              Designed By:{" "}
              {product?.designer ? product?.designer : "Designer Not Available"}
            </p>
            <p>
              About:{" "}
              {product?.about
                ? product?.about
                : "Not much Info Available about this Product"}
            </p>
            <p>more...</p>
          </div>
          <p className=" text-center bg-pink-700 w-[15%] max-w-[20%] rounded-md px-2 py-4 font-bold">
            Price: <span className=" text-white">{product?.productPrice} </span>{" "}
          </p>
          <div>
            <button
              onClick={() => handleAddTocart(product)}
              className=" flex items-center gap-2 text-center text-white bg-black  rounded-md px-2 py-2 font-bold"
            >
              Add To Cart
              <BiCartAdd />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

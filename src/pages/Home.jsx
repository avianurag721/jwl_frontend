import React, { useEffect, useState } from "react";
import { getAllProducts } from "../Services/operations/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [product, setProducts] = useState(null);

  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    (async () => {
      try {
        const res = await getAllProducts();
        console.log("pritnting all the producrs", res?.data?.data);
        setProducts(res?.data?.data);
      } catch (error) {
        console.log("Could not fetch Course Details");
      }
    })();
  }, []);

  console.log("all the products area", product);
  return (
    <div className=" flex mx-auto  flex-col items-center justify-center w-11/12">
      {/* <h1 className=" text-4xl font-bold my-5">One Stop Solution For all Your jewellery Needs</h1> */}
      <div className=" flex  flex-wrap items-center justify-center">
        {product ? (
          product.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <h1>Sorry, there are no products</h1>
        )}
      </div>
    </div>
  );
};

export default Home;

import { toast } from "react-hot-toast";
import { apiConnector } from "../connector";
import { productendpoints } from "../apis";
const { ADD_PRODUCT, GET_ALL_PRODUCT, GET_PRODUCT_DETAILS } = productendpoints;

export const addProduct = async ({ productName, price, rating }) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const addedProduct = await apiConnector("POST", ADD_PRODUCT, {
      productName,
      price,
      rating,
    });
    console.log("addedProduct", addedProduct);
    toast.success("Product Created Successfully");
    result = addedProduct.data;
    toast.dismiss(toastId);
  } catch (error) {
    console.log("error while adding product", error);
  }
  toast.dismiss(toastId);
  return result;
};

export const getAllProducts = async () => {
  let result = null;
  try {
    const allproducts = await apiConnector("GET", GET_ALL_PRODUCT);

    console.log("all products in servies/products", allproducts);
    return allproducts;
  } catch (error) {
    console.log("error while fetching all data in front end", error);
  }
  return result;
};


export const getProductDetails = async (productId) => {
  console.log("productIdin operations",productId)
  let productDetails;
  const toastId = toast.loading("Loading...");
  try {
    productDetails = await apiConnector("POST", GET_PRODUCT_DETAILS, {
      productId: productId,
    });
    toast.dismiss(toastId);
  } catch (error) {
    toast.error("Can't Fetch Course Details");
    console.log("error while fetching details", error);
    toast.dismiss(toastId);
  }
  toast.dismiss(toastId);
  return productDetails;
};

const BASE_URL = "http://localhost:4000/api/v1"

export const endpoints = {
    SIGNUP_API: BASE_URL+"/auth/signup",
    LOGIN_API: BASE_URL+"/auth/login"
}

export const productendpoints = {
    ADD_PRODUCT:BASE_URL+"/product/addproduct",
    GET_ALL_PRODUCT: BASE_URL + "/product/getAllProducts",
    GET_PRODUCT_DETAILS:BASE_URL+"/product/getProductDetails"
}
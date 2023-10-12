// import { toast } from "react-hot-toast";
// import { apiConnector } from "../connector";
// // import { endpoints } from "../apis";
// import { useNavigate } from "react-router-dom";
// import { setToken, setUser } from "../../redux/slices/AuthSlice";
// // const { SIGNUP_API, LOGIN_API } = endpoints;

// export function signUp({ userName, email, password, userType }) {
//   return async (navigate) => {
//     const toastId = toast.loading("Loading..");
//     console.log("usertype", userType);
//     try {
//       const signupdata = await apiConnector("POST", SIGNUP_API, {
//         userName,
//         email,
//         password,
//         userType,
//       });

//       console.log("signup data.....", signupdata);
//       toast.success("Signup Successful,Please Login");
//       toast.dismiss(toastId);
//     } catch (error) {
//       console.log("SIGNUP API ERROR............", error.response.data.message);
//       toast.error(error.response.data.message);
//     }
//     toast.dismiss(toastId);
//   };
// }

// export function logIn(email, password) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading");
//     try {
//       // console.log("login email, password",email, password)
//       const loginData = await apiConnector("POST", LOGIN_API, {
//         email,
//         password,
//       });
//       console.log("login res", loginData.data);
//       const token = loginData.data.token;
//       const user = loginData.data.user;
//       dispatch(setUser(user));
//       dispatch(setToken(token));

//       console.log(token);
//       localStorage.setItem("token", JSON.stringify(loginData.data.token));
//       localStorage.setItem("user", JSON.stringify(loginData.data.user));
//       toast.success("login Successful");
//     } catch (error) {
//       console.log("SIGNUP API ERROR.....d.......", error.response.data.message);
//       toast.error(error.response.data.message);
//     }
//     toast.dismiss(toastId);
//   };
// }
// export function logout(navigate) {
//   return (dispatch) => {
//     dispatch(setToken(null));
//     dispatch(setUser(null));
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     toast.success("Logged Out");
//     navigate("/");
//   };
// }

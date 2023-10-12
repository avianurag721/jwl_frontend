import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, value) {
      state.user = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
  },
});

export const { setUser, setToken } = AuthSlice.actions;
export default AuthSlice.reducer;

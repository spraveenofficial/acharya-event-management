// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// // import { persistStore, persistReducer } from "redux-persist";
// // import storage from "redux-persist/lib/storage";
// // const persistConfig = {
// //   key: root,
// //   storage,
// // };
// const token = localStorage.getItem("erpLogin");
// const fetchUserById = createAsyncThunk(
//   "usersAuth",
//   async (userId, thunkAPI) => {
//     // const response = await userAPI.fetchById(userId);
//     // return response.data;
//     if (!token) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// );
// const initialState = {
//   isAuth: false,
//   user: "",
// };

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setAuth: (state, action) => {
//       const { isAuth } = action.payload;
//       state.isAuth = isAuth;
//     },
//     setUser: (state, action) => {
//       console.log(action);
//       state.user = action.payload.user;
//     },
//   },
// });


// export const { setAuth, setUser } = authSlice.actions;

// export default authSlice.reducer;


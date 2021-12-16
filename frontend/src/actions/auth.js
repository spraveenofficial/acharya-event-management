import axios from "axios";
// import setAuthToken from "../utils/setAuthToken";
import { SET_AUTH, REMOVE_AUTH } from "./types";

export const loadUser = () => async (dispatch) => {
  const token = localStorage.getItem("erpToken");
  try {
    const res = await axios({
      method: "POST",
      url: "/dashboard",
      headers: {
        token: token,
      },
    });
    console.log(res.data)
    dispatch({
      type: SET_AUTH,
      payload: res.data.data.data,
    });
  } catch (error) {
    dispatch({
      type: REMOVE_AUTH,
    });
  }
};

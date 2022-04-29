import axios from "axios";
import { SET_AUTH, REMOVE_AUTH, LOAD_USER } from "./types";
import { baseUrl } from "../Baseurl";
// console.log(baseUrl);
export const loadUser = () => async (dispatch) => {
  const token = localStorage.getItem("erpToken");
  try {
    const { data } = await axios({
      method: "POST",
      url: `${baseUrl}/dashboard`,
      headers: {
        token: token,
      },
    });
    dispatch({
      type: SET_AUTH,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: REMOVE_AUTH,
    });
  }
};

export const getUser = () => async (dispatch) => {
  dispatch({
    type: LOAD_USER,
  });
};

export const userLogout = () => (dispatch) => {
  dispatch({
    type: REMOVE_AUTH,
  });
};

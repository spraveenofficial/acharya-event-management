import axios from "axios";
import { SET_AUTH, REMOVE_AUTH, LOAD_USER } from "./types";

export const loadUser = () => async (dispatch) => {
  // dispatch({
  //   type: LOAD_USER,
  // });
  const token = localStorage.getItem("erpToken");
  try {
    const res = await axios({
      method: "POST",
      url: "/dashboard",
      headers: {
        token: token,
      },
    });
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

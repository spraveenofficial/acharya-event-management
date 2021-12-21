import {
  LOAD_ONLINECLASS,
  LOAD_OFFLINECLASS,
  SETNO_ONLINECLASS,
  SETNO_OFFLINECLASS,
} from "./types";

import axios from "axios";

export const loadOnlineClass = (auid) => async (dispatch) => {
  const token = localStorage.getItem("aliveToken");
  console.log(token);
  try {
    const res = await axios({
      method: "POST",
      url: "/onlineclass",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const classes = res.data.data;
    // console.log(res.data);
    if (classes.length == 0) {
      dispatch({
        type: SETNO_ONLINECLASS,
      });
    } else {
      dispatch({
        type: LOAD_ONLINECLASS,
        payload: classes,
      });
    }
  } catch (error) {
    dispatch({
      type: SETNO_ONLINECLASS,
    });
  }
};

import { LOAD_SUPERUSER, LOAD_ADMIN, NORMAL_USER } from "../actions/types";
import axios from "axios";
import { baseUrl } from "../Baseurl";

export const loadAdmin = (auid) => async (dispatch) => {
  const token = localStorage.getItem("erpToken");
  try {
    const res = await axios({
      method: "POST",
      url: `${baseUrl}/isAdmin`,
      headers: {
        token: token,
      },
      data: {
        auid: auid,
      },
    });
    const user = res.data;
    if (user.isAdmin) {
      dispatch({
        type: LOAD_ADMIN,
      });
    } else if (user.isSuperUser) {
      dispatch({
        type: LOAD_SUPERUSER,
      });
    } else {
      dispatch({
        type: NORMAL_USER,
      });
    }
  } catch (error) {
    dispatch({
      type: NORMAL_USER,
    });
  }
};

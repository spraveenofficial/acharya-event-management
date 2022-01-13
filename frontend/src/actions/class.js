import { LOAD_OFFLINECLASS, SETNO_OFFLINECLASS } from "./types";

import axios from "axios";
import { baseUrl } from "../Baseurl";

// export const loadOnlineClass = (auid) => async (dispatch) => {
//   const token = localStorage.getItem("aliveToken");
//   // console.log(token);
//   try {
//     const res = await axios({
//       method: "POST",
//       url: `${baseUrl}/onlineclass`,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const classes = res.data.data;
//     // console.log(res.data);
//     if (classes.length == 0) {
//       dispatch({
//         type: SETNO_ONLINECLASS,
//       });
//     } else {
//       dispatch({
//         type: LOAD_ONLINECLASS,
//         payload: classes,
//       });
//     }
//   } catch (error) {
//     dispatch({
//       type: SETNO_ONLINECLASS,
//     });
//   }
// };

export const loadOfflineClass = () => async (dispatch) => {
  const token = localStorage.getItem("erpToken");
  console.log(token);
  await axios({
    method: "POST",
    url: `${baseUrl}/offlineclass`,
    headers: {
      token: token,
    },
  }).then((res) => {
    if (res.data.classes.length === 0) {
      dispatch({
        type: SETNO_OFFLINECLASS,
      });
    } else {
      dispatch({
        type: LOAD_OFFLINECLASS,
        payload: res.data,
      });
    }
  });
};

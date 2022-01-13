import {
  LOAD_ONLINECLASS,
  LOAD_OFFLINECLASS,
  SETNO_ONLINECLASS,
  SETNO_OFFLINECLASS,
} from "../actions/types";

const initialState = {
  classes: "",
  offlineClass: "",
};

export default function setAuth(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_ONLINECLASS:
      return {
        ...state,
        classes: payload,
      };
    case LOAD_OFFLINECLASS:
      return {
        ...state,
        offlineClass: payload,
      };
    case SETNO_ONLINECLASS:
      return {
        ...state,
        classes: "No classes",
      };
    case SETNO_OFFLINECLASS:
      return {
        ...state,
        classes: "No Classes",
      };
    default:
      return state;
  }
}

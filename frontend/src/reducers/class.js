import {
  LOAD_ONLINECLASS,
  LOAD_OFFLINECLASS,
  SETNO_ONLINECLASS,
  SETNO_OFFLINECLASS,
} from "../actions/types";

const initialState = {
  onlineClass: "",
  offlineClass: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_ONLINECLASS:
      return {
        ...state,
        onlineClass: payload,
      };
    case LOAD_OFFLINECLASS:
      return {
        ...state,
        offlineClass: payload,
      };
    case SETNO_ONLINECLASS:
      return {
        ...state,
        onlineClass: "No classes",
      };
    case SETNO_OFFLINECLASS:
      return {
        ...state,
        onlineClass: "",
      };

    default:
      return state;
  }
}

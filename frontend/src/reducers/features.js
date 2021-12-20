import { LOAD_SUPERUSER, LOAD_ADMIN, NORMAL_USER } from "../actions/types";

const initialState = {
  isAdmin: false,
  isSuperUser: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_SUPERUSER:
      return {
        ...state,
        isAdmin: false,
        isSuperUser: true,
      };
    case LOAD_ADMIN: {
      return {
        ...state,
        isAdmin: true,
        isSuperUser: false,
      };
    }
    case NORMAL_USER: {
      return {
        ...state,
        isAdmin: false,
        isSuperUser: false,
      };
    }
    default:
      return state;
  }
}

import { LOAD_OFFLINECLASS, SETNO_OFFLINECLASS } from "../actions/types";

const initialState = {
  classes: "",
};

export default function setClasses(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_OFFLINECLASS: {
      return {
        ...state,
        classes: payload,
      };
    }
    case SETNO_OFFLINECLASS: {
      return {
        // ...state,
        classes: "No Classes",
      };
    }
  }
}

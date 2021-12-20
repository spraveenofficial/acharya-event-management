import { combineReducers } from "redux";
import auth from "./auth";
import adminData from "./features";
export default combineReducers({
  auth,
  adminData,
});

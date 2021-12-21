import { combineReducers } from "redux";
import classes from "./class";
import auth from "./auth";
import adminData from "./features";

export default combineReducers({
  auth,
  adminData,
  classes,
});

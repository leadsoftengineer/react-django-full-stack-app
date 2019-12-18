//KYIV MEDIA 18.12.2019
import { combineReducers } from "redux";
import leads from "./leads";
import errors from "./errors";

export default combineReducers({
  leads,
  errors
});

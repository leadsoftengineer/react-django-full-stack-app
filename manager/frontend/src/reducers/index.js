//KYIV MEDIA 19.12.2019
import { combineReducers } from "redux";
import leads from "./leads";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  leads,
  errors,
  messages
});

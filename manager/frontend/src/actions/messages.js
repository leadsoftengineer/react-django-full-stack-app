//KYIV MEDIA 19.12.2019
import { CREATE_MESSAGES } from "./types";

//CREATE MESSAGE
export const createMessage = msg => {
  return {
    type: CREATE_MESSAGES,
    payload: msg
  };
};

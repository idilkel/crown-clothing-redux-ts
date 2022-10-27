import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./users.types";

//user can be null or auth object
export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

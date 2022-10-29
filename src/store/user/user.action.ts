import {
  createAction,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./users.types";
import {
  UserData,
  AdditionalInformation,
} from "../../utils/firebase/firebase.utils";

//---------------Action types:------------------------------------

export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  UserData
>;

//------------------createAction:---------------------------------

//user can be null or auth object
export const setCurrentUser = withMatcher(
  (user: UserData): SetCurrentUser =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
);

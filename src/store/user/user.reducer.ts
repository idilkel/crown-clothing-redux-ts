import { AnyAction } from "redux";

import { USER_ACTION_TYPES } from "./users.types";
import { setCurrentUser } from "./user.action";
import { UserData } from "../../utils/firebase/firebase.utils";

export type UserState = {
  readonly currentUser: UserData | null;
};

export const INITIAL_STATE: UserState = {
  currentUser: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): UserState => {
  if (setCurrentUser.match(action)) {
    return { ...state, currentUser: action.payload };
  }
  return state;
};

// //Without withMatcher:
// import { USER_ACTION_TYPES } from "./users.types";
// import { setCurrentUser } from "./user.action";
// import { UserData } from "../../utils/firebase/firebase.utils";

// export const INITIAL_STATE = {
//   currentUser: null,
// };

// export const userReducer = (state = INITIAL_STATE, action={}) => {
//   //console.log(action);
//   const { type, payload } = action;
//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       //console.log(payload);
//       return { ...state, currentUser: payload };
//     default:
//       //throw new Error(`Unhandled type ${type}` in userReducer);
//       return state;
//   }
// };

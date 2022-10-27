import { USER_ACTION_TYPES } from "./users.types";

export const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action = {}) => {
  //console.log(action);
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      //console.log(payload);
      return { ...state, currentUser: payload };
    default:
      //throw new Error(`Unhandled type ${type}` in userReducer);
      return state;
  }
};

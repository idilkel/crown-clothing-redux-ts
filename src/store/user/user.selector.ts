import { createSelector } from "reselect";

import { RootState } from "../store";

import { UserState } from "./user.reducer";

export const selectUserReduce = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReduce],
  (userSlice) => userSlice.currentUser
);

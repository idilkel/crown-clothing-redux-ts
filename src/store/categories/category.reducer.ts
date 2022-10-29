import { AnyAction } from "redux";

import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";
import { CategoryAction, setCategories } from "./category.action";

export type CategoriesState = {
  readonly categories: Category[];
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
};

//reducers can receive any action at all
//only if the action received matches the type of this action type it will occur
//type-narrowing for type-safety - might be overkill
export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action: AnyAction
): CategoriesState => {
  if (setCategories.match(action)) {
    return { ...state, categories: action.payload }; //will be SetCategories type
  }
  return state;
};

// //Before using withMatcher:
// export const categoriesReducer = (
//   state = CATEGORIES_INITIAL_STATE,
//   action = {} as CategoryAction
// ): CategoriesState => {
//   switch (action.type) {
//     case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
//       return { ...state, categories: action.payload };
//     default:
//       return state;
//   }
// };

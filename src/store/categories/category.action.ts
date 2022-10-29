import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";

import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { AnyAction } from "redux";

//---------------Action types:------------------------------------

export type SetCategories = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
  Category[]
>;

//The following 3 are not really required. There are examples for different cases
export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

//Not used in the reduce and replaced by matcher
export type CategoryAction =
  | SetCategories
  | FetchCategoriesStart
  | FetchCategoriesSuccess
  | FetchCategoriesFailed;

//--------------------createAction:----------------------------------

export const setCategories = withMatcher(
  (categoriesArray: Category[]): SetCategories =>
    createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray)
);

//Loading true
export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess =>
    createAction(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    )
);

export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);

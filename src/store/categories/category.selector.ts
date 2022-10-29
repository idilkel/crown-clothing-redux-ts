import { createSelector } from "reselect";

import { RootState } from "../store";

import { CategoriesState } from "./category.reducer";
import { CategoryMap } from "./category.types";

//initial selector for the reducer slice needed from the redux state
//state.categories is a Category type (see in the reducer)
const selectCategoryReducer = (state: RootState): CategoriesState =>
  state.categories;

//categories array from the categories slice
//2 arguments: input selector, output selector
//it will run only if the categoriesSlice is different (because of the memoized reselect - createSelector)
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

//memoized by reselect - createSelector, reduces once and then runs only when the categories array changes
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

////JS Without memoization with reselect:
// export const selectCategoriesMap = (state) =>
// state.categories.categories.reduce((acc, category) => {
//   const { title, items } = category;
//   acc[title.toLowerCase()] = items;
//   return acc;
// }, {});

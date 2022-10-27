import { createSelector } from "reselect";

//initial selector for the reducer slice needed from the redux state
const selectCategoryReducer = (state) => state.categories;

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
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

////Without memoization with reselect:
// export const selectCategoriesMap = (state) =>
// state.categories.categories.reduce((acc, category) => {
//   const { title, items } = category;
//   acc[title.toLowerCase()] = items;
//   return acc;
// }, {});

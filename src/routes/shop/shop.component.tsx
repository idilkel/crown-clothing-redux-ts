import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
//Used only once in the useEffect for uploading the array of the SHOP_DATA to the firestore
import SHOP_DATA from "../../shop-data";
import { setCategories } from "../../store/categories/category.action";

import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../../utils/firebase/firebase.utils";

const Shop = () => {
  const dispatch = useDispatch();
  //This useEffect is done only once for uploading the array of the SHOP_DATA to the firestore
  // useEffect(() => {
  // // The corresponding redux action should be written; performed earlier with Context
  //   dispatch(addCollectionAndDocuments("categories", SHOP_DATA));
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      //console.log(categoriesArray);
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

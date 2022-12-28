import { PayloadAction } from "@reduxjs/toolkit";
import { ICategory, ICategoryState } from "../slices/category.slice";

export const replaceCategoriesReducer = (
	state: ICategoryState,
	action: PayloadAction<ICategory[]>,
) => {
	state.records = action.payload;
};

import { createSlice } from "@reduxjs/toolkit";
import { replaceCategoriesReducer } from "../reducers/category.reducer";

export interface ICategory {
	_id: string;
	title: string;
	createdAt: string;
	updatedAt: string;
}

export interface ICategoryState {
	records: ICategory[];
}

const initialState: ICategoryState = {
	records: [],
};

const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {
		replaceCategories: replaceCategoriesReducer,
	},
});

export const categoryActions = categorySlice.actions;
export default categorySlice;

import { createSlice } from "@reduxjs/toolkit";
import { replaceCategoriesReducer } from "../reducers/category.reducer";

export interface IConstructionStatus {
	_id: string;
	title: string;
	createdAt: string;
	updatedAt: string;
}

export interface IConstructionStatusState {
	records: IConstructionStatus[];
}

const initialState: IConstructionStatusState = {
	records: [],
};

const constructionStatusSlice = createSlice({
	name: "constructionStatus",
	initialState,
	reducers: {
		replaceConstructionStatus: replaceCategoriesReducer,
	},
});

export const constructionStatusActions = constructionStatusSlice.actions;
export default constructionStatusSlice;

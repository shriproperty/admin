import { createSlice } from "@reduxjs/toolkit";
import { IFacility } from "../types/interface";
import { replaceFacilities } from "../reducers/categories.reducer";

export interface ICategoriesState {
	facilities: IFacility[];
}

const initialState: ICategoriesState = {
	facilities: [],
};

const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		replaceFacilities,
	},
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice;

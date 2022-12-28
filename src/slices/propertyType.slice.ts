import { createSlice } from "@reduxjs/toolkit";
import { replacePropertyTypesReducer } from "../reducers/propertyType.reducer";

export interface IPropertyType {
	_id: string;
	title: string;
	createdAt: string;
	updatedAt: string;
}

export interface IPropertyTypeState {
	records: IPropertyType[];
}

const initialState: IPropertyTypeState = {
	records: [],
};

const propertyTypeSlice = createSlice({
	name: "propertyType",
	initialState,
	reducers: {
		replacePropertyTypes: replacePropertyTypesReducer,
	},
});

export const propertyTypeActions = propertyTypeSlice.actions;
export default propertyTypeSlice;

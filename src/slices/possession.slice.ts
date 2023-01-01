import { createSlice } from "@reduxjs/toolkit";
import { replacePossessionReducer } from "../reducers/possession.reducer";

export interface IPossession {
	_id: string;
	title: string;
	createdAt: string;
	updatedAt: string;
}

export interface IPossessionState {
	records: IPossession[];
}

const initialState: IPossessionState = {
	records: [],
};

const possessionSlice = createSlice({
	name: "possession",
	initialState,
	reducers: {
		replacePossession: replacePossessionReducer,
	},
});

export const possessionActions = possessionSlice.actions;
export default possessionSlice;

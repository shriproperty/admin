import { createSlice } from "@reduxjs/toolkit";
import { replaceUnitReducer } from "../reducers/unit.reducer";

export interface IUnit {
	_id: string;
	title: string;
	createdAt: string;
	updatedAt: string;
}

export interface IUnitState {
	records: IUnit[];
}

const initialState: IUnitState = {
	records: [],
};

const unitSlice = createSlice({
	name: "unit",
	initialState,
	reducers: {
		replaceUnits: replaceUnitReducer,
	},
});

export const unitActions = unitSlice.actions;
export default unitSlice;

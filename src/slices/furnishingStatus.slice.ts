import { createSlice } from "@reduxjs/toolkit";
import { replaceFurnishingStatusReducer } from "../reducers/furnishingStatus.reducer";

export interface IFurnishingStatus {
	_id: string;
	title: string;
	createdAt: string;
	updatedAt: string;
}

export interface IFurnishingStatusState {
	records: IFurnishingStatus[];
}

const initialState: IFurnishingStatusState = {
	records: [],
};

const furnishingStatusSlice = createSlice({
	name: "furnishingStatus",
	initialState,
	reducers: {
		replaceFurnishingStatus: replaceFurnishingStatusReducer,
	},
});

export const furnishingStatusActions = furnishingStatusSlice.actions;
export default furnishingStatusSlice;

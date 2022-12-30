import { createSlice } from "@reduxjs/toolkit";
import { replaceFacilityReducer } from "../reducers/facility.reducer";

export interface IFacility {
	_id: string;
	title: string;
	key: string;
	icon: string;
	createdAt: string;
	updatedAt: string;
}

export interface IFacilityState {
	records: IFacility[];
}

const initialState: IFacilityState = {
	records: [],
};

const facilitySlice = createSlice({
	name: "facility",
	initialState,
	reducers: {
		replaceFacilities: replaceFacilityReducer,
	},
});

export const facilityActions = facilitySlice.actions;
export default facilitySlice;

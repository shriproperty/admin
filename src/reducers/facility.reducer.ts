import { PayloadAction } from "@reduxjs/toolkit";
import { IFacility, IFacilityState } from "../slices/facilities.slice";

export const replaceFacilityReducer = (
	state: IFacilityState,
	action: PayloadAction<IFacility[]>,
) => {
	state.records = action.payload;
};

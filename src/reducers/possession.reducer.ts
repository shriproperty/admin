import { PayloadAction } from "@reduxjs/toolkit";
import { IPossession, IPossessionState } from "../slices/possession.slice";

export const replacePossessionReducer = (
	state: IPossessionState,
	action: PayloadAction<IPossession[]>,
) => {
	state.records = action.payload;
};

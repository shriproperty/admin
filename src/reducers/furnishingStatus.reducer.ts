import { PayloadAction } from "@reduxjs/toolkit";
import { IFurnishingStatus, IFurnishingStatusState } from "../slices/furnishingStatus.slice";

export const replaceFurnishingStatusReducer = (
	state: IFurnishingStatusState,
	action: PayloadAction<IFurnishingStatus[]>,
) => {
	state.records = action.payload;
};

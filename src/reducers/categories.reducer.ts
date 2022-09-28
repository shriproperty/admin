import { PayloadAction } from "@reduxjs/toolkit";
import { ICategoriesState } from "../slices/categories.slice";
import { IFacility } from "../types/interface";

export function replaceFacilities(state: ICategoriesState, action: PayloadAction<IFacility[]>) {
	state.facilities = action.payload;
}

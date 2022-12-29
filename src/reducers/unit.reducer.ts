import { PayloadAction } from "@reduxjs/toolkit";
import { IUnit, IUnitState } from "../slices/unit.slice";

export const replaceUnitReducer = (state: IUnitState, action: PayloadAction<IUnit[]>) => {
	state.records = action.payload;
};

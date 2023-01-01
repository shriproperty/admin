import { PayloadAction } from "@reduxjs/toolkit";
import { IConstructionStatus, IConstructionStatusState } from "../slices/constructionStatus.slice";

export const replaceConstructionStatusReducer = (
	state: IConstructionStatusState,
	action: PayloadAction<IConstructionStatus[]>,
) => {
	state.records = action.payload;
};

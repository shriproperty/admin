import { PayloadAction } from "@reduxjs/toolkit";
import { IProperty, IPropertyState } from "../slices/properties.slice";

export const replacePropertiesReducer = (
	state: IPropertyState,
	action: PayloadAction<IProperty[]>,
) => {
	state.records = action.payload;
};

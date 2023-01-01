import { PayloadAction } from "@reduxjs/toolkit";
import { IProperty, IPropertyState } from "../slices/properties.slice";

export const replacePropertiesReducer = (
	state: IPropertyState,
	action: PayloadAction<IProperty[]>,
) => {
	state.records = action.payload;
};

export const updateNewPropertyReducer = (
	state: IPropertyState,
	action: PayloadAction<Record<string, any>>,
) => {
	state.newProperty = { ...state.newProperty, ...action.payload };
};

import { PayloadAction } from "@reduxjs/toolkit";
import { IPropertyType, IPropertyTypeState } from "../slices/propertyType.slice";

export const replacePropertyTypesReducer = (
	state: IPropertyTypeState,
	action: PayloadAction<IPropertyType[]>,
) => {
	state.records = action.payload;
};

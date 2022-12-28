import { Dispatch } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import API, { IAPIResponseError, IAPIResponseSuccess } from "../utils/api.util";
import { IPropertyType, propertyTypeActions } from "../slices/propertyType.slice";

export const getAllPropertyTypesHandler = () => {
	return async (dispatch: Dispatch) => {
		try {
			interface IResponse extends IAPIResponseSuccess {
				records: IPropertyType[];
			}

			const res = await API.get<IResponse>("/property-types");
			dispatch(propertyTypeActions.replacePropertyTypes(res.data.records));
			return Promise.resolve(res);
		} catch (err) {
			return Promise.reject(err as AxiosError<IAPIResponseError>);
		}
	};
};

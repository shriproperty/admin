import { Dispatch } from "@reduxjs/toolkit";
import api, { IAPIResponseError, IAPIResponseSuccess } from "../utils/api.util";
import { IProperty, propertyActions } from "../slices/properties.slice";
import { AxiosError } from "axios";

export const getAllPropertiesHandler = (page: number) => {
	return async (dispatch: Dispatch) => {
		try {
			interface IResponse extends IAPIResponseSuccess {
				records: IProperty[];
				total_pages: number;
				total_properties: number;
				page: number;
				size: number;
				max_price: number;
				min_price: number;
			}

			const res = await api.get<IResponse>(`/properties?page=${page}
			`);
			dispatch(propertyActions.replaceProperties(res.data.records || []));

			return Promise.resolve(res.data);
		} catch (err) {
			return Promise.reject(err as AxiosError<IAPIResponseError>);
		}
	};
};

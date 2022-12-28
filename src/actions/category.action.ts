import { Dispatch } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import API, { IAPIResponseError, IAPIResponseSuccess } from "../utils/api.util";
import { ICategory, categoryActions } from "../slices/category.slice";

export const getAllCategoriesHandler = () => {
	return async (dispatch: Dispatch) => {
		try {
			interface IResponse extends IAPIResponseSuccess {
				records: ICategory[];
			}

			const res = await API.get<IResponse>("/categories");
			dispatch(categoryActions.replaceCategories(res.data.records));
			return Promise.resolve(res);
		} catch (err) {
			return Promise.reject(err as AxiosError<IAPIResponseError>);
		}
	};
};

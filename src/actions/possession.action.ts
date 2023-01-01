import { Dispatch } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import API, { IAPIResponseError, IAPIResponseSuccess } from "../utils/api.util";
import { IPossession, possessionActions } from "../slices/possession.slice";

export const getAllPossessionHandler = () => {
	return async (dispatch: Dispatch) => {
		try {
			interface IResponse extends IAPIResponseSuccess {
				records: IPossession[];
			}

			const res = await API.get<IResponse>("/possession");
			dispatch(possessionActions.replacePossession(res.data.records));
			return Promise.resolve(res);
		} catch (err) {
			return Promise.reject(err as AxiosError<IAPIResponseError>);
		}
	};
};

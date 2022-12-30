import { Dispatch } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import API, { IAPIResponseError, IAPIResponseSuccess } from "../utils/api.util";
import { IFurnishingStatus, furnishingStatusActions } from "../slices/furnishingStatus.slice";

export const getAllFurnishingStatusHandler = () => {
	return async (dispatch: Dispatch) => {
		try {
			interface IResponse extends IAPIResponseSuccess {
				records: IFurnishingStatus[];
			}

			const res = await API.get<IResponse>("/furnishing-status");
			dispatch(furnishingStatusActions.replaceFurnishingStatus(res.data.records));
			return Promise.resolve(res);
		} catch (err) {
			return Promise.reject(err as AxiosError<IAPIResponseError>);
		}
	};
};

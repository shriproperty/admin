import { Dispatch } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import API, { IAPIResponseError, IAPIResponseSuccess } from "../utils/api.util";
import { IConstructionStatus, constructionStatusActions } from "../slices/constructionStatus.slice";

export const getAllConstructionStatusHandler = () => {
	return async (dispatch: Dispatch) => {
		try {
			interface IResponse extends IAPIResponseSuccess {
				records: IConstructionStatus[];
			}

			const res = await API.get<IResponse>("/construction-status");
			dispatch(constructionStatusActions.replaceConstructionStatus(res.data.records));
			return Promise.resolve(res);
		} catch (err) {
			return Promise.reject(err as AxiosError<IAPIResponseError>);
		}
	};
};

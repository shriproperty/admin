import { Dispatch } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import API, { IAPIResponseError, IAPIResponseSuccess } from "../utils/api.util";
import { IUnit, unitActions } from "../slices/unit.slice";

export const getAllUnitsHandler = () => {
	return async (dispatch: Dispatch) => {
		try {
			interface IResponse extends IAPIResponseSuccess {
				records: IUnit[];
			}

			const res = await API.get<IResponse>("/units");
			dispatch(unitActions.replaceUnits(res.data.records));
			return Promise.resolve(res);
		} catch (err) {
			return Promise.reject(err as AxiosError<IAPIResponseError>);
		}
	};
};

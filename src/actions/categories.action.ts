import { Dispatch } from "@reduxjs/toolkit";
import { categoriesActions } from "../slices/categories.slice";
import { IFacility } from "../types/interface";
import api from "../utils/api.util";

export function getAllFacilities() {
	return async (dispatch: Dispatch) => {
		try {
			interface IResponse {
				message: string;
				records: IFacility[];
			}

			const res: IResponse = await api.get("/facilities");

			dispatch(categoriesActions.replaceFacilities(res.records));

			return Promise.resolve(res);
		} catch (err) {
			return Promise.reject(err);
		}
	};
}

import { Dispatch } from "@reduxjs/toolkit";
import { usersActions, IUser } from "../slices/users.slice";
import API, { IAPIResponseError, IAPIResponseSuccess } from "../utils/api.util";
import { AxiosError } from "axios";

export function getAllUsers(page: number) {
	return async (dispatch: Dispatch) => {
		try {
			interface IResponse extends IAPIResponseSuccess {
				page: number;
				size: number;
				total_pages: number;
				total_users: number;
				records: IUser[];
			}

			const res = await API.get<IResponse>(`/users?page=${page}`);
			dispatch(usersActions.replaceUsers(res.data.records || []));

			return Promise.resolve(res.data);
		} catch (err) {
			return Promise.reject(err as AxiosError<IAPIResponseError>);
		}
	};
}

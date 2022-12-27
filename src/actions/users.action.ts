import { Dispatch } from "@reduxjs/toolkit";
import { usersActions, IUser } from "../slices/users.slice";
import api, { IAPIResponseSuccess } from "../utils/api.util";

export function getAllUsers(page: number) {
	return async (dispatch: Dispatch) => {
		interface IResponse extends IAPIResponseSuccess {
			page: number;
			size: number;
			total_pages: number;
			total_users: number;
			records: IUser[];
		}

		const res = await api.get<IResponse>(`/users?page=${page}`);
		dispatch(usersActions.replaceUsers(res.data.records || []));

		return res;
	};
}

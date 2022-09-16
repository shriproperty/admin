import { Dispatch } from "@reduxjs/toolkit";
import { usersActions } from "../slices/users.slice";
import { IUser } from "../types/interface";
import api from "../utils/api.util";

export function getAllUsers(page: number) {
	return async (dispatch: Dispatch) => {
		interface IResponse {
			message: string;
			page: number;
			size: number;
			totalPages: number;
			totalContacts: number;
			records: IUser[];
		}

		const res: IResponse = await api.get(`/users?page=${page}`);
		dispatch(usersActions.replaceUsers(res?.records || []));

		return res;
	};
}

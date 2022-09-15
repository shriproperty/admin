import { Dispatch } from "@reduxjs/toolkit";
import { usersActions } from "../slices/users.slice";
import { IUser } from "../types/interface";
import api from "../utils/api.util";

export function getAllUsers() {
	return async (dispatch: Dispatch) => {
		interface IResponse {
			message: string;
			records: IUser[];
		}

		const res: IResponse = await api.get("/users");
		dispatch(usersActions.replaceUsers(res.records));

		return res;
	};
}

import { Dispatch } from "@reduxjs/toolkit";
import API, { IAPIResponseError, IAPIResponseSuccess } from "../utils/api.util";
import { AxiosError } from "axios";
import { IUser, usersActions } from "../slices/users.slice";

export interface ILoginPayload {
	email: string;
	password: string;
}

/**
 * This action will login the admin
 * @param payload - email and password
 */
export const loginHandler = (payload: ILoginPayload) => {
	return async (dispatch: Dispatch) => {
		interface IResponse extends IAPIResponseSuccess {
			access_token: string;
			refresh_token: string;
		}

		try {
			// make API request to `/auth/login` route
			const res = await API.post<IResponse>("/auth/login", payload);

			// save access and refresh token to local storage
			localStorage.setItem("access_token", res.data.access_token);
			localStorage.setItem("refresh_token", res.data.refresh_token);

			return Promise.resolve(res);
		} catch (err) {
			return Promise.reject(err as AxiosError<IAPIResponseError>);
		}
	};
};

/**
 * This action will get current user
 */
export const getCurrentUserHandler = () => {
	return async (dispatch: Dispatch) => {
		try {
			interface IResponse extends IAPIResponseSuccess {
				user: IUser;
			}

			const res = await API.get<IResponse>("/auth/me");

			dispatch(usersActions.replaceCurrentUser(res.data.user));

			return Promise.resolve(res);
		} catch (err) {
			return Promise.reject(err as AxiosError<IAPIResponseError>);
		}
	};
};

import { createSlice } from "@reduxjs/toolkit";
import { replaceCurrentUserReducer, replaceUsersReducer } from "../reducers/users.reducers";

export interface IUser {
	_id: string;
	uid: number;
	role: "admin" | "user";
	name: string;
	email: string;
	phone: string;
	properties: [];
	verified: boolean;
	createdAt: string;
	updatedAt: string;
}

export interface IUsersState {
	records: IUser[];
	currentUser: IUser | null;
}

const initialState: IUsersState = {
	records: [],
	currentUser: null,
};

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		replaceUsers: replaceUsersReducer,
		replaceCurrentUser: replaceCurrentUserReducer,
	},
});

export const usersActions = usersSlice.actions;
export default usersSlice;

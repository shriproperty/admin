import { createSlice } from "@reduxjs/toolkit";
import { replaceUsersReducer } from "../reducers/users.reducers";

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
}

const initialState: IUsersState = {
	records: [],
};

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		replaceUsers: replaceUsersReducer,
	},
});

export const usersActions = usersSlice.actions;
export default usersSlice;

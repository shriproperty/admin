import { createSlice } from "@reduxjs/toolkit";
import { replaceUsers } from "../reducers/users.reducers";

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
		replaceUsers: replaceUsers,
	},
});

export const usersActions = usersSlice.actions;
export default usersSlice;

import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types/interface";
import { replaceUsers } from "../reducers/users.reducers";

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

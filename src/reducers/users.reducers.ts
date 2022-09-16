import { PayloadAction } from "@reduxjs/toolkit";
import { IUsersState } from "../slices/users.slice";
import { IUser } from "../types/interface";

export function replaceUsers(state: IUsersState, action: PayloadAction<IUser[]>) {
	state.records = action.payload;
}

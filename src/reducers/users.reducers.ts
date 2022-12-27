import { PayloadAction } from "@reduxjs/toolkit";
import { IUsersState, IUser } from "../slices/users.slice";

export function replaceUsers(state: IUsersState, action: PayloadAction<IUser[]>) {
	state.records = action.payload;
}

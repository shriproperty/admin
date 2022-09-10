import { PayloadAction } from "@reduxjs/toolkit";
import { IContactsState } from "../slices/contacts.slice";
import { IContact } from "../types/interface";

export function replaceContacts(state: IContactsState, action: PayloadAction<IContact[]>) {
	state.records = action.payload;
}

export function setGetLoading(state: IContactsState, action: PayloadAction<boolean>) {
	state.getLoading = action.payload;
}

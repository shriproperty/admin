import { createSlice } from "@reduxjs/toolkit";
import { IContact } from "../types/interface";
import {
	replaceContacts,
	setGetLoading,
	setUpdateStatusLoading,
} from "../reducers/contacts.reducer";

export interface IContactsState {
	records: IContact[];
	getLoading: boolean;
	updateStatusLoading: boolean;
}

const initialState: IContactsState = {
	records: [],
	getLoading: false,
	updateStatusLoading: false,
};

const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	reducers: {
		replaceContacts,
		setGetLoading,
		setUpdateStatusLoading,
	},
});

export const contactsActions = contactsSlice.actions;
export default contactsSlice;

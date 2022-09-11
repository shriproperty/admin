import { createSlice } from "@reduxjs/toolkit";
import { IContact } from "../types/interface";
import { replaceContacts, setGetLoading } from "../reducers/contacts.reducer";

export interface IContactsState {
	records: IContact[];
	getLoading: boolean;
}

const initialState: IContactsState = {
	records: [],
	getLoading: true,
};

const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	reducers: {
		replaceContacts,
		setGetLoading,
	},
});

export const contactsActions = contactsSlice.actions;
export default contactsSlice;

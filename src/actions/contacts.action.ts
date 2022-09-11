import { Dispatch } from "@reduxjs/toolkit";
import { contactsActions } from "../slices/contacts.slice";
import { IAPIResponse } from "../types/interface";
import api from "../utils/api.util";

export function fetchAllContacts() {
	return async (dispatch: Dispatch) => {
		const res: IAPIResponse = await api.get("/contacts");

		dispatch(contactsActions.replaceContacts(res?.records || []));
		dispatch(contactsActions.setGetLoading(false));
	};
}

import { Dispatch } from "@reduxjs/toolkit";
import { contactsActions } from "../slices/contacts.slice";
import { EContactStatus } from "../types/enum";
import { IContact } from "../types/interface";
import api from "../utils/api.util";

export function fetchAllContacts(page: number) {
	return async (dispatch: Dispatch) => {
		interface IResponse {
			message: string;
			page: number;
			size: number;
			totalPages: number;
			totalContacts: number;
			records: IContact[];
		}

		dispatch(contactsActions.setGetLoading(true));

		const res: IResponse = await api.get(`/contacts?page=${page}`);

		dispatch(contactsActions.replaceContacts(res?.records || []));
		dispatch(contactsActions.setGetLoading(false));

		return res;
	};
}

export function deleteContact(id: number) {
	return async (dispatch: Dispatch) => {
		return await api.delete(`/contacts/${id}`);
	};
}

export function updateContactStatus(id: number, status: EContactStatus) {
	return async (dispatch: Dispatch) => {
		dispatch(contactsActions.setUpdateStatusLoading(true));
		const res = await api.patch(`/contacts/${id}`, { status });
		dispatch(contactsActions.setUpdateStatusLoading(false));

		return res;
	};
}

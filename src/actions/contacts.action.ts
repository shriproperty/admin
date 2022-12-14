import { Dispatch } from "@reduxjs/toolkit";
import { contactsActions } from "../slices/contacts.slice";
import { EContactStatus } from "../types/enum";
import { IContact } from "../types/interface";
import API from "../utils/api.util";

export function getAllContacts(page: number) {
	return async (dispatch: Dispatch) => {
		interface IResponse {
			message: string;
			page: number;
			size: number;
			total_pages: number;
			total_contacts: number;
			records: IContact[];
		}

		dispatch(contactsActions.setGetLoading(true));

		const res: IResponse = await API.get(`/contacts?page=${page}`);

		dispatch(contactsActions.replaceContacts(res?.records || []));
		dispatch(contactsActions.setGetLoading(false));

		return res;
	};
}

/**
 * Delete a contact
 * @param uid uid of contact to delete
 */
export function deleteContact(uid: number) {
	return async (dispatch: Dispatch) => {
		return await API.delete(`/contacts/${uid}`);
	};
}

/**
 * Update status of contact
 * @param uid uid of contact to update
 * @param status status to update
 */
export function updateContactStatus(uid: number, status: EContactStatus) {
	return async (dispatch: Dispatch) => {
		dispatch(contactsActions.setUpdateStatusLoading(true));
		const res = await API.patch(`/contacts/${uid}`, { status });
		dispatch(contactsActions.setUpdateStatusLoading(false));

		return res;
	};
}

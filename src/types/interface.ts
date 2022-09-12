import { EContactStatus } from "./enum";

export interface IContact {
	/**
	 * Contact ID provided by mongoose (primary key)
	 * `id` should be used instead of `_id` in the frontend
	 */
	_id?: string;

	/**
	 * Unique identifier for the contact.
	 */
	id?: number;

	/**
	 * Name of user who created the contact
	 */
	name: string;

	/**
	 * email of user who created contact
	 */
	email: string;

	/**
	 * phone number of user who created contact
	 */
	phone: number;

	/**
	 * Subject of the contact
	 */
	subject: string;

	/**
	 * Message of the contact
	 */
	message: string;

	/**
	 * Status of the contact
	 */
	status: EContactStatus;

	/**
	 * When the contact was created
	 */
	createdAt?: Date;

	/**
	 * When the contact was last updated
	 */
	updatedAt?: Date;
}

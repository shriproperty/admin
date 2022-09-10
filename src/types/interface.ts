import { EContactStatus } from "./enum";

export interface IContact {
	/**
	 * Id of the contact
	 */
	_id?: string;

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

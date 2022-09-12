import { Button, Dropdown, Menu, message, Modal, Popconfirm, Typography } from "antd";
import { useState } from "react";
import {
	deleteContact,
	fetchAllContacts,
	updateContactStatus,
} from "../../../actions/contacts.action";
import { useAppDispatch } from "../../../hooks/useAddDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { EContactStatus } from "../../../types/enum";
import { IContact } from "../../../types/interface";
import { TRootState } from "../../../types/types";
import StatusTag from "../statusTag";

interface ViewContactModalProps {
	/**
	 * Modal state
	 */
	modalState: {
		visible: boolean;
		record: IContact;
	};

	/**
	 * function to update the modal state
	 */
	setModalState: any;

	/**
	 * current page number
	 */
	currentPage: number;
}

function ViewContactModal({ modalState, setModalState, currentPage }: ViewContactModalProps) {
	const dispatch = useAppDispatch();
	const { updateStatusLoading } = useAppSelector((state: TRootState) => state.contacts);
	const [selectedStatus, setSelectedStatus] = useState<EContactStatus>(modalState.record.status);

	const refreshState = () => {
		dispatch(fetchAllContacts(currentPage));
	};

	const closeModalHandler = () => {
		setSelectedStatus(modalState.record.status);
		setModalState((prevState: any) => ({ ...prevState, visible: false }));
	};

	const modalOkHandler = async () => {
		if (selectedStatus !== modalState.record.status) {
			await dispatch(updateContactStatus(modalState.record.id as number, selectedStatus));
			refreshState();
		}
		setModalState((prevState: any) => ({ ...prevState, visible: false }));
	};

	const deleteHandler = async () => {
		await dispatch(deleteContact(modalState.record.id as number));

		message.success("Contact deleted successfully");
		setModalState((prevState: any) => ({ ...prevState, visible: false }));
		refreshState();
	};

	const dropdownMenu = () => {
		return (
			<Menu
				onClick={(item) => setSelectedStatus(item.key as EContactStatus)}
				items={[
					{ label: "Pending", key: "Pending" },
					{ label: "In Progress", key: "In Progress" },
					{ label: "Completed", key: "Completed" },
				]}
			/>
		);
	};

	return (
		<Modal
			title={
				<div className="flex items-center">
					<Typography.Title level={5} className="!m-0 !mb-0 !mt-0">
						({modalState.record.id}) {modalState.record.name}
					</Typography.Title>
					<StatusTag status={modalState.record.status} className="!ml-3" />
				</div>
			}
			open={modalState.visible}
			onCancel={closeModalHandler}
			onOk={modalOkHandler}
			confirmLoading={updateStatusLoading}
			closable
			destroyOnClose
		>
			<div className="flex items-center mt-3">
				<Typography.Title level={4} className="!mb-0">
					Email:-
				</Typography.Title>
				<Typography.Title level={5} className="ml-4 !mt-0 !mb-0">
					{modalState.record.email}
				</Typography.Title>
			</div>

			<div className="flex items-center mt-3">
				<Typography.Title level={4} className="!mb-0">
					Phone:-
				</Typography.Title>
				<Typography.Title level={5} className="ml-4 !mt-0 !mb-0">
					{modalState.record.phone}
				</Typography.Title>
			</div>

			<div className="flex items-center mt-3">
				<Typography.Title level={4} className="!mb-0">
					Subject:-
				</Typography.Title>
				<Typography.Title level={5} className="ml-4 !mt-0 !mb-0">
					{modalState.record.subject}
				</Typography.Title>
			</div>

			<div className="flex items-center mt-3">
				<Typography.Title level={4} className="!mb-0">
					Message:-
				</Typography.Title>
				<Typography.Paragraph className="ml-4 !mt-0 !mb-0">
					{modalState.record.message}
				</Typography.Paragraph>
			</div>

			<div className="mt-12">
				<Dropdown overlay={dropdownMenu} trigger={["click"]}>
					<Button>
						{selectedStatus === modalState.record.status
							? "Update Status"
							: selectedStatus}
					</Button>
				</Dropdown>

				<Popconfirm
					title="Are you sure to delete this Contact?"
					okText="Yes"
					cancelText="No"
					onConfirm={deleteHandler}
				>
					<Button className="ml-3">Delete</Button>
				</Popconfirm>
			</div>
		</Modal>
	);
}

export default ViewContactModal;

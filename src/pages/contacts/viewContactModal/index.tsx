import { Button, Modal, Typography } from "antd";
import { IContact } from "../../../types/interface";
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
}

function ViewContactModal({ modalState, setModalState }: ViewContactModalProps) {
	const closeModalHandler = () => {
		setModalState((prevState: any) => ({ ...prevState, visible: false }));
	};

	return (
		<Modal
			title={
				<div className="flex items-center">
					<Typography.Title level={5} className="!m-0 !mb-0 !mt-0">
						{modalState.record.name}
					</Typography.Title>
					<StatusTag status={modalState.record.status} className="!ml-3" />
				</div>
			}
			open={modalState.visible}
			onCancel={closeModalHandler}
			closable
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
				<Button>Update Status</Button>
				<Button className="ml-3">Delete</Button>
			</div>
		</Modal>
	);
}

export default ViewContactModal;

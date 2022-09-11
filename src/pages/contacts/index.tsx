import { useState, useEffect, FC } from "react";
import { Table, Tag, TablePaginationConfig, Modal, Typography, Button } from "antd";
import { PresetColorType } from "antd/lib/_util/colors";
import { useAppDispatch } from "../../hooks/useAddDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { EContactStatus } from "../../types/enum";
import { TRootState } from "../../types/types";
import { fetchAllContacts } from "../../actions/contacts.action";
import { IContact } from "../../types/interface";

function Contacts() {
	const dispatch = useAppDispatch();
	const { getLoading, records } = useAppSelector((state: TRootState) => state.contacts);

	const [paginationOptions, setPaginationOptions] = useState<TablePaginationConfig>({
		current: 1,
		total: 40,
		pageSize: 10,
	});
	const [modalState, setModalState] = useState<{ visible: boolean; record: IContact }>({
		visible: false,
		record: {
			name: "Shri Property",
			phone: 9465663009,
			email: "info@shriproperty.com",
			subject: "3 BHK Flat",
			message: "I want to buy 3 BHK Flat",
			status: EContactStatus.Pending,
		},
	});

	useEffect(() => {
		dispatch(fetchAllContacts(paginationOptions.current as number)).then((res) => {
			setPaginationOptions({
				current: res.page,
				total: res.totalContacts,
				pageSize: res.size,
			});
		});
	}, [dispatch, records.length, paginationOptions?.current]);

	const onPaginationChangeHandler: TablePaginationConfig["onChange"] = (page) => {
		setPaginationOptions((prevState) => ({ ...prevState, current: page }));
	};

	const onRowHandler = (record: IContact) => {
		return {
			onClick: () => {
				setModalState({ visible: true, record });
			},
		};
	};

	const closeModalHandler = () => {
		setModalState((prevState) => ({ ...prevState, visible: false }));
	};

	interface StatusProps {
		/**
		 * Status of the contact
		 */
		status: EContactStatus;

		/**
		 * Additional class name
		 */
		className?: string;
	}

	const Status: FC<StatusProps> = ({ status, className }) => {
		let color: PresetColorType = "red";

		if (status === EContactStatus["Pending"]) color = "red";
		else if (status === EContactStatus["In Progress"]) color = "gold";
		else if (status === EContactStatus["Completed"]) color = "green";

		return (
			<Tag color={color} className={className}>
				{status}
			</Tag>
		);
	};

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
		},
		{
			title: "Phone",
			dataIndex: "phone",
			key: "phone",
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
			render: (status: EContactStatus) => {
				return <Status status={status} />;
			},
		},
		{
			title: "Subject",
			dataIndex: "subject",
			key: "subject",
		},
	];

	return (
		<main className="px-16 py-10">
			<Modal
				title={
					<div className="flex items-center">
						<Typography.Title level={5} className="!m-0 !mb-0 !mt-0">
							{modalState.record.name}
						</Typography.Title>
						<Status status={modalState.record.status} className="!ml-3" />
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

			<Table
				loading={getLoading}
				dataSource={records}
				columns={columns}
				onRow={onRowHandler}
				pagination={{ ...paginationOptions, onChange: onPaginationChangeHandler }}
			/>
		</main>
	);
}

export default Contacts;

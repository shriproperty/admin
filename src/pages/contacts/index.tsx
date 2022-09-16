import { useState, useEffect } from "react";
import { Table, TablePaginationConfig } from "antd";
import { useAppDispatch } from "../../hooks/useAddDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { EContactStatus } from "../../types/enum";
import { TRootState } from "../../types/types";
import { getAllContacts } from "../../actions/contacts.action";
import { IContact } from "../../types/interface";
import StatusTag from "./statusTag";
import ViewContactModal from "./viewContactModal";

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
		dispatch(getAllContacts(paginationOptions.current as number)).then((res) => {
			setPaginationOptions({
				current: res.page,
				total: res.total_contacts,
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

	const columns = [
		{
			title: "UID",
			dataIndex: "uid",
			key: "uid",
		},
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
				return <StatusTag status={status} />;
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
			<ViewContactModal
				modalState={modalState}
				setModalState={setModalState}
				currentPage={paginationOptions.current as number}
			/>

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

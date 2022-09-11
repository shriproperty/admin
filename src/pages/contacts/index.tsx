import { Table, Tag } from "antd";
import { PresetColorType } from "antd/lib/_util/colors";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAddDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { EContactStatus } from "../../types/enum";
import { TRootState } from "../../types/types";
import { fetchAllContacts } from "../../actions/contacts.action";

function Contacts() {
	const dispatch = useAppDispatch();
	const { getLoading, records } = useAppSelector((state: TRootState) => state.contacts);

	useEffect(() => {
		if (!records.length) dispatch(fetchAllContacts());
	}, [dispatch, records.length]);

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
				let color: PresetColorType = "red";

				if (status === EContactStatus["Pending"]) color = "red";
				else if (status === EContactStatus["In Progress"]) color = "gold";
				else if (status === EContactStatus["Completed"]) color = "green";

				return <Tag color={color}>{status}</Tag>;
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
			<Table loading={getLoading} dataSource={records} columns={columns} />
		</main>
	);
}

export default Contacts;

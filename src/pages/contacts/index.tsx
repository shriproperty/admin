import { Table, Tag } from "antd";
import { PresetColorType } from "antd/lib/_util/colors";
import { EContactStatus } from "../../types/enum";
import { IContact } from "../../types/interface";

function Contacts() {
	const dataSource: IContact[] = [
		{
			name: "Ayush Chugh",
			email: "email@example.com",
			phone: 1234567890,
			subject: "Hello",
			message: "Message",
			status: EContactStatus["Pending"],
		},
		{
			name: "Ayush Chugh",
			email: "email@example.com",
			phone: 1234567890,
			subject: "Hello",
			message: "Message",
			status: EContactStatus["In Progress"],
		},
		{
			name: "Ayush Chugh",
			email: "email@example.com",
			phone: 1234567890,
			subject: "Hello",
			message: "Message",
			status: EContactStatus["Completed"],
		},
	];

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
			<Table dataSource={dataSource} columns={columns} />
		</main>
	);
}

export default Contacts;

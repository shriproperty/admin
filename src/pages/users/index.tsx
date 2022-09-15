import { Table } from "antd";
import VerifiedTag from "./verifiedTag";

function Users() {
	const records = [
		{
			uid: 1,
			name: "Shri Property",
			email: "info@shriproperty.com",
			phone: 9465663009,
			verified: true,
			createdAt: "11/12/2006",
		},
	];

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
			title: "Verified",
			dataIndex: "verified",
			key: "verified",
			render: (verified: boolean) => {
				return <VerifiedTag isVerified={verified} />;
			},
		},
		{
			title: "Created at",
			dataIndex: "createdAt",
			key: "createdAt",
		},
	];

	return (
		<main className="px-16 py-10">
			<Table dataSource={records} columns={columns} />;
		</main>
	);
}

export default Users;

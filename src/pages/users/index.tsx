import { Table } from "antd";
import VerifiedTag from "./verifiedTag";
import { getAllUsers } from "../../actions/users.action";
import { useAppDispatch } from "../../hooks/useAddDispatch";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { TRootState } from "../../types/types";
import useFormatDate from "../../hooks/useFormatDate";

function Users() {
	const dispatch = useAppDispatch();
	const { records } = useAppSelector((state: TRootState) => state.users);
	const formatDate = useFormatDate();

	useEffect(() => {
		dispatch(getAllUsers());
	}, []);

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
			render: (createdAt: Date) => {
				return formatDate(createdAt);
			},
		},
	];

	return (
		<main className="px-16 py-10">
			<Table dataSource={records} columns={columns} />;
		</main>
	);
}

export default Users;

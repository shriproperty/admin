import { Table, TablePaginationConfig } from "antd";
import VerifiedTag from "./verifiedTag";
import { getAllUsers } from "../../actions/users.action";
import { useAppDispatch } from "../../hooks/useAddDispatch";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { TRootState } from "../../types/types";
import useFormatDate from "../../hooks/useFormatDate";

function Users() {
	const dispatch = useAppDispatch();
	const { records } = useAppSelector((state: TRootState) => state.users);
	const formatDate = useFormatDate();

	const [getLoading, setGetLoading] = useState(true);
	const [paginationOptions, setPaginationOptions] = useState<TablePaginationConfig>({
		current: 1,
		total: 40,
		pageSize: 10,
	});

	useEffect(() => {
		setGetLoading(true);
		dispatch(getAllUsers(paginationOptions.current as number))
			.then((res) => {
				setPaginationOptions({
					current: res.page,
					total: res.total_users,
					pageSize: res.size,
				});
			})
			.finally(() => {
				setGetLoading(false);
			});
	}, [records.length, paginationOptions?.current]);

	const onPaginationChangeHandler: TablePaginationConfig["onChange"] = (page) => {
		setPaginationOptions((prevState) => ({ ...prevState, current: page }));
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
			<Table
				loading={getLoading}
				dataSource={records}
				columns={columns}
				pagination={{ ...paginationOptions, onChange: onPaginationChangeHandler }}
			/>
		</main>
	);
}

export default Users;

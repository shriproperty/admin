import { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useAddDispatch";
import { getAllPropertiesHandler } from "../../actions/properties.action";
import { useAppSelector } from "../../hooks/useAppSelector";
import { TRootState } from "../../store";
import useFormatDate from "../../hooks/useFormatDate";
import { Table, TablePaginationConfig } from "antd";
import ApprovedPropertyTag from "./components/approvalTag";

const Properties: FC = () => {
	const dispatch = useAppDispatch();
	const { records } = useAppSelector((state: TRootState) => state.properties);
	const formatDate = useFormatDate();

	const [getLoading, setGetLoading] = useState(true);
	const [paginationOptions, setPaginationOptions] = useState<TablePaginationConfig>({
		current: 1,
		total: 40,
		pageSize: 10,
	});

	useEffect(() => {
		setGetLoading(true);
		dispatch(getAllPropertiesHandler(paginationOptions.current as number))
			.then((res) => {
				setPaginationOptions({
					current: res.page,
					total: res.total_properties,
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
			title: "Title",
			dataIndex: ["basic_details", "title"],
			key: "title",
		},
		{
			title: "owner",
			dataIndex: ["basic_details", "owner", "name"],
			key: "owner",
		},
		{
			title: "owner contact",
			dataIndex: ["basic_details", "owner", "contact"],
			key: "contact",
		},
		{
			title: "approved",
			dataIndex: "approved",
			key: "approved",
			render: (approved: boolean) => {
				return <ApprovedPropertyTag isApproved={approved} />;
			},
		},
		{
			title: "Created on",
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
};

export default Properties;

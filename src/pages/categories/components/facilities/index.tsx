import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { useEffect, useState } from "react";
import { getAllFacilities } from "../../../../actions/categories.action";
import { useAppDispatch } from "../../../../hooks/useAddDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { TRootState } from "../../../../types/types";

function Facilities() {
	const dispatch = useAppDispatch();
	const { facilities } = useAppSelector((state: TRootState) => state.categories);

	const [facilitiesLoading, setFacilitiesLoading] = useState(true);

	useEffect(() => {
		setFacilitiesLoading(true);

		dispatch(getAllFacilities()).finally(() => {
			setFacilitiesLoading(false);
		});
	}, []);

	const columns: ColumnsType<{ title: string; icon: string; key: string }> = [
		{
			title: "Title",
			dataIndex: "title",
			key: "title",
		},
		{
			title: "Icon",
			dataIndex: "icon",
			key: "icon",
			render: (icon) => <img src={icon} alt="icon" className="w-20 h-20" />,
		},
	];

	return (
		<>
			<Table
				columns={columns}
				dataSource={facilities}
				loading={facilitiesLoading}
				pagination={false}
			/>
		</>
	);
}

export default Facilities;

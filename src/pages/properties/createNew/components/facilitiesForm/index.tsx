import { Button, Checkbox, Form, Spin } from "antd";
import { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../../../../hooks/useAddDispatch";
import { getAllFacilityHandler } from "../../../../../actions/facility.action";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../../../../hooks/useAppSelector";
import { TRootState } from "../../../../../store";

interface IFacilitiesFormProps {
	setCurrentTab: (tab: number) => void;
}

const FacilitiesForm: FC<IFacilitiesFormProps> = ({ setCurrentTab }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const facilities = useAppSelector((state: TRootState) => state.facility.records);

	const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);

	useEffect(() => {
		fetchFacilities();
	}, []);

	const fetchFacilities = async () => {
		try {
			await dispatch(getAllFacilityHandler());
		} catch (err) {
			navigate("/properties");
		}
	};

	return (
		<Form className="hidden" id="4" onFinish={() => setCurrentTab(5)}>
			{facilities && facilities.length > 0 ? (
				<Checkbox.Group onChange={(values) => setSelectedFacilities(values as string[])}>
					{facilities.map((facility) => (
						<Checkbox key={facility._id} value={facility._id} className="!mr-5">
							{facility.title}
						</Checkbox>
					))}
				</Checkbox.Group>
			) : (
				<Spin />
			)}

			<div className="flex justify-between mt-5">
				<Button type="primary" htmlType="button" onClick={() => setCurrentTab(3)}>
					&larr; Previous
				</Button>
				<Button type="primary" htmlType="submit">
					Next &rarr;
				</Button>
			</div>
		</Form>
	);
};

export default FacilitiesForm;

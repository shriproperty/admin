import { Button, Form, Input, InputNumber, Select, Spin } from "antd";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../../../hooks/useAddDispatch";
import { getAllUnitsHandler } from "../../../../../actions/unit.action";
import { useAppSelector } from "../../../../../hooks/useAppSelector";
import { TRootState } from "../../../../../store";
import { propertyActions } from "../../../../../slices/properties.slice";

interface SpecificationsFormProps {
	setCurrentTab: (tab: number) => void;
}

const SpecificationsForm: FC<SpecificationsFormProps> = ({ setCurrentTab }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [form] = Form.useForm();
	const units = useAppSelector((state: TRootState) => state.unit.records);

	useEffect(() => {
		fetchAllFields();
	}, []);

	const fetchAllFields = async () => {
		try {
			await dispatch(getAllUnitsHandler());
		} catch (err) {
			navigate("/properties");
		}
	};

	const onNextHandler = (values: Record<string, any>) => {
		dispatch(propertyActions.updateNewProperty(values));
		setCurrentTab(3);
	};

	const onPreviousHandler = () => {
		dispatch(propertyActions.updateNewProperty(form.getFieldsValue()));
		setCurrentTab(1);
	};

	return (
		<Form
			id="2"
			className="hidden"
			layout="vertical"
			autoComplete="off"
			form={form}
			onFinish={onNextHandler}
		>
			<Form.Item
				label="Size"
				name="size"
				rules={[{ required: true, message: "Size is required" }]}
			>
				<InputNumber type="number" placeholder="10" min={0} className="!w-full" />
			</Form.Item>
			{units && units.length > 0 ? (
				<Form.Item
					label="Unit"
					name="unit"
					tooltip="Which unit is used to measure size"
					rules={[{ required: true, message: "Unit is required" }]}
				>
					<Select
						placeholder="Select a unit"
						options={units.map((unit) => {
							return {
								label: unit.title,
								value: unit._id,
							};
						})}
					/>
				</Form.Item>
			) : (
				<Spin />
			)}
			<Form.Item
				label="Direction"
				name="direction"
				rules={[{ required: true, message: "Direction is required" }]}
			>
				<Select
					placeholder="Select a direction"
					options={[
						{
							label: "North",
							value: "North",
						},
						{
							label: "South",
							value: "South",
						},
						{
							label: "East",
							value: "East",
						},
						{
							label: "West",
							value: "West",
						},
						{
							label: "North East",
							value: "North-East",
						},
						{
							label: "North West",
							value: "North-West",
						},
						{
							label: "South East",
							value: "South-East",
						},
						{
							label: "South West",
							value: "South-West",
						},
					]}
				/>
			</Form.Item>
			<Form.Item
				label="Floor"
				name="floor"
				rules={[
					{ required: true, message: "Floor is required" },
					{ whitespace: true, message: "Floor must not be empty" },
				]}
			>
				<Input type="text" placeholder="ground" />
			</Form.Item>
			<Form.Item label="Total Floors" name="total_floors">
				<InputNumber type="number" min={0} className="!w-full" placeholder="2" />
			</Form.Item>
			<div className="flex w-full justify-between">
				<Form.Item
					label="Bed rooms"
					name="bed_rooms"
					tooltip="How many bed rooms are in your property"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="3" />
				</Form.Item>

				<Form.Item
					label="Bath rooms"
					name="bath_rooms"
					tooltip="How many bath rooms are in your property"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="3" />
				</Form.Item>

				<Form.Item
					label="Kitchens"
					name="kitchens"
					tooltip="How many kitchens are in your property"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="1" />
				</Form.Item>
			</div>
			<div className="flex w-full justify-between">
				<Form.Item
					label="Living rooms"
					name="living_rooms"
					tooltip="How many living rooms are in your property"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="2" />
				</Form.Item>

				<Form.Item
					label="Dinning rooms"
					name="dinning_rooms"
					tooltip="How many dinning rooms are in your property"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="1" />
				</Form.Item>

				<Form.Item
					label="Store rooms"
					name="store_rooms"
					tooltip="How many store rooms are in your property"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="1" />
				</Form.Item>
			</div>
			<div className="flex w-full justify-between">
				<Form.Item
					label="Pooja rooms"
					name="pooja_rooms"
					tooltip="How many pooja rooms are in your property"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="1" />
				</Form.Item>

				<Form.Item
					label="Other rooms"
					name="other_rooms"
					tooltip="How many extra rooms are in your property"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="3" />
				</Form.Item>

				<Form.Item
					label="Balconies"
					name="balconies_rooms"
					tooltip="How many balconies are in your property"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="3" />
				</Form.Item>
			</div>
			<div className="flex justify-between">
				<Button type="primary" htmlType="button" onClick={onPreviousHandler}>
					&larr; Previous
				</Button>
				<Button type="primary" htmlType="submit">
					Next &rarr;
				</Button>
			</div>
		</Form>
	);
};

export default SpecificationsForm;

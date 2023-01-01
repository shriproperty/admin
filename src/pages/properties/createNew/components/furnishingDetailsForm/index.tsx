/* eslint-disable no-secrets/no-secrets */
import { Button, Form, InputNumber, Select, Spin } from "antd";
import { FC, useEffect } from "react";
import { useAppDispatch } from "../../../../../hooks/useAddDispatch";
import { useNavigate } from "react-router";
import { getAllFurnishingStatusHandler } from "../../../../../actions/furnishingStatus.action";
import { useAppSelector } from "../../../../../hooks/useAppSelector";
import { TRootState } from "../../../../../store";
import { propertyActions } from "../../../../../slices/properties.slice";

interface FurnishingDetailsFormProps {
	setCurrentTab: (tab: number) => void;
}

const FurnishingDetailsForm: FC<FurnishingDetailsFormProps> = ({ setCurrentTab }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [form] = Form.useForm();
	const furnishingStatus = useAppSelector((state: TRootState) => state.furnishingStatus.records);

	useEffect(() => {
		fetchAllFields();
	}, []);

	const fetchAllFields = async () => {
		try {
			await dispatch(getAllFurnishingStatusHandler());
		} catch (err) {
			navigate("/properties");
		}
	};

	const onNextHandler = (values: Record<string, any>) => {
		dispatch(propertyActions.updateNewProperty(values));
		setCurrentTab(4);
	};

	const onPreviousHandler = () => {
		dispatch(propertyActions.updateNewProperty(form.getFieldsValue()));
		setCurrentTab(2);
	};

	return (
		<Form
			id="3"
			layout="vertical"
			autoComplete="off"
			className="hidden"
			form={form}
			onFinish={onNextHandler}
		>
			<Form.Item
				label="Furnishing Status"
				name="furnishing_status"
				rules={[{ required: true, message: "Furnishing Status is required" }]}
			>
				{furnishingStatus && furnishingStatus.length > 0 ? (
					<Select
						placeholder="Select Furnishing Status"
						options={furnishingStatus.map((furnishingStatus) => {
							return {
								label: furnishingStatus.title,
								value: furnishingStatus._id,
							};
						})}
					/>
				) : (
					<Spin />
				)}
			</Form.Item>

			<div className="flex justify-between w-full">
				<Form.Item
					label="AC"
					name="acs"
					tooltip="How many ac are installed in your property"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="3" />
				</Form.Item>
				<Form.Item
					label="Stoves"
					name="stoves"
					tooltip="How many Stoves will be provided by you"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="1" />
				</Form.Item>

				<Form.Item
					label="Wardrobes"
					name="wardrobes"
					tooltip="How many wardrobes/almiras are installed in your property"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="3" />
				</Form.Item>
			</div>

			<div className="flex justify-between w-full">
				<Form.Item label="Sofas" name="sofas" tooltip="How many sofas will you provide">
					<InputNumber type="number" min={0} className="!w-full" placeholder="1" />
				</Form.Item>

				<Form.Item
					label="Dinning Tables"
					name="dinning_tables"
					tooltip="How many dinning tables will you provide"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="1" />
				</Form.Item>

				<Form.Item label="Beds" name="beds" tooltip="How many beds will you provide">
					<InputNumber type="number" min={0} className="!w-full" placeholder="3" />
				</Form.Item>
			</div>

			<div className="flex justify-between w-full">
				<Form.Item
					label="Geysers"
					name="geysers"
					tooltip="How many geysers are installed in your property"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="3" />
				</Form.Item>

				<Form.Item
					label="Modular Kitchen"
					name="modular_kitchens"
					tooltip="How many modular kitchens are in your property"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="1" />
				</Form.Item>

				<Form.Item label="Fans" name="fans" tooltip="How many fans will you provide">
					<InputNumber type="number" min={0} className="!w-full" placeholder="4" />
				</Form.Item>
			</div>

			<div className="flex justify-between w-full">
				<Form.Item label="Lights" name="lights" tooltip="How many lights will you provide">
					<InputNumber type="number" min={0} className="!w-full" placeholder="8" />
				</Form.Item>

				<Form.Item
					label="refrigerators"
					name="refrigerators"
					tooltip="How many refrigerators will you provide"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="1" />
				</Form.Item>

				<Form.Item
					label="Microwave/ovens"
					name="micro_ovens"
					tooltip="How many Microwave/ovens will you provide"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="0" />
				</Form.Item>
			</div>

			<div className="flex justify-between w-full">
				<Form.Item
					label="TV"
					name="tvs"
					tooltip="How many TV are installed in your property"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="3" />
				</Form.Item>

				<Form.Item
					label="Dressing Tables"
					name="dressing_tables"
					tooltip="How many dressing tables will you provide"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="2" />
				</Form.Item>

				<Form.Item
					label="Tv Wall Panels"
					name="tv_wall_panels"
					tooltip="How many Tv Wall Panels are installed in your property"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="0" />
				</Form.Item>
			</div>

			<div className="flex justify-between w-full">
				<Form.Item
					label="Washing Machines"
					name="washing_machines"
					tooltip="How many washing machines will you provide"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="1" />
				</Form.Item>

				<Form.Item
					label="Curtains"
					name="curtains"
					tooltip="How many curtains will you provide"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="3" />
				</Form.Item>

				<Form.Item
					label="Water Purifiers"
					name="water_purifiers"
					tooltip="How many water purifiers are installed in your property"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="1" />
				</Form.Item>
			</div>

			<div className="flex justify-between w-full">
				<Form.Item
					label="Exhaust Fans"
					name="exhaust"
					tooltip="How many exhaust fans are installed in your property"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="4" />
				</Form.Item>

				<Form.Item
					label="Dish Washers"
					name="dish_washers"
					tooltip="How many Dish Washers will you provide"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="0" />
				</Form.Item>

				<Form.Item
					label="Chimneys"
					name="chimneys"
					tooltip="How many chimneys are installed in your property"
				>
					<InputNumber type="number" min={0} className="!w-full" placeholder="1" />
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

export default FurnishingDetailsForm;

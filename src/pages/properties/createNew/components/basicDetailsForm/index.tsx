import { Form, Input, Button, Select, Spin } from "antd";
import { FC, useEffect } from "react";
import { useAppDispatch } from "../../../../../hooks/useAddDispatch";
import { getAllCategoriesHandler } from "../../../../../actions/category.action";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../../../../hooks/useAppSelector";
import { TRootState } from "../../../../../store";
import { getAllPropertyTypesHandler } from "../../../../../actions/propertyType.action";

/**
 * TODO: add following fields
 * 1) Property type
 * 2) Possession
 * 3) Category
 * 4) Construction Status
 * 5) Property Age
 */

interface BasicDetailsFormProps {
	setCurrentTab: (tab: number) => void;
}

const BasicDetailsForm: FC<BasicDetailsFormProps> = ({ setCurrentTab }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const categories = useAppSelector((state: TRootState) => state.categories.records);
	const propertyTypes = useAppSelector((state: TRootState) => state.propertyType.records);

	useEffect(() => {
		fetchAllFields();
	}, []);

	const fetchAllFields = async () => {
		try {
			await dispatch(getAllCategoriesHandler());
			await dispatch(getAllPropertyTypesHandler());
		} catch (err) {
			navigate("/properties");
		}
	};

	return (
		<Form
			id="0"
			className="hidden"
			autoComplete="off"
			layout="vertical"
			onFinish={() => setCurrentTab(1)}
		>
			<Form.Item
				label="Title"
				name="title"
				rules={[
					{ required: true, message: "Please fill the title" },
					{ min: 3, message: "Title must be at least 3 characters long" },
					{ max: 100, message: "Title must be at most 100 characters long" },
					{ whitespace: true, message: "Title must not be empty" },
				]}
			>
				<Input type="text" placeholder="3BHK house for sale in sector 70" />
			</Form.Item>

			<Form.Item
				label="Description"
				name="description"
				rules={[
					{ required: true, message: "Please give a detailed description" },
					{ min: 10, message: "Description must be at least 10 characters long" },
					{
						max: 500,
						message: "Description must be at most 500 characters long",
					},
					{ whitespace: true, message: "Description must not be empty" },
				]}
			>
				<Input.TextArea
					autoSize
					maxLength={500}
					showCount
					placeholder="School at 500m, hospital at 1km"
				/>
			</Form.Item>

			<Form.Item
				label="Price"
				name="price"
				tooltip="Rent will be monthly"
				rules={[
					{ required: true, message: "Please fill the price" },
					{ min: 4, message: "Price must be greater than 1000" },
					{ whitespace: true, message: "Price must not be empty" },
				]}
			>
				<Input type="number" placeholder="1500000" />
			</Form.Item>

			<Form.Item
				label="Discounted Price"
				name="discounted_price"
				rules={[
					{ required: false },
					{ min: 4, message: "Discounted Price must be greater than 1000" },
					{ whitespace: true, message: "Discounted Price must not be empty" },
				]}
			>
				<Input type="number" placeholder="1000000" />
			</Form.Item>

			<Form.Item
				label="Security Deposit"
				name="security_deposit"
				rules={[
					{ required: false },
					{ min: 3, message: "Security Deposit must be greater than 100" },
					{ whitespace: true, message: "Security Deposit Price must not be empty" },
				]}
			>
				<Input type="number" placeholder="3000" />
			</Form.Item>
			<Form.Item
				label="Monthly Maintenance"
				name="monthly_maintenance"
				rules={[
					{ required: false },
					{ min: 3, message: "Monthly Maintenance must be greater than 100" },
					{ whitespace: true, message: "Monthly Maintenance must not be empty" },
				]}
			>
				<Input type="number" placeholder="1000" />
			</Form.Item>

			<Form.Item
				label="Owner name"
				name="owner_name"
				rules={[
					{ required: true, message: "Owner name is required" },
					{ whitespace: true, message: "Owner name must not be empty" },
					{ min: 3, message: "Owner name must be at least 3 characters long" },
					{ max: 30, message: "Owner name must be at most 100 characters long" },
				]}
			>
				<Input type="text" placeholder="Shri Property" />
			</Form.Item>

			<Form.Item
				label="Owner Contact"
				name="owner_contact"
				rules={[
					{ required: true, message: "Owner Contact is required" },
					{ whitespace: true, message: "Owner Contact must not be empty" },
				]}
			>
				<Input type="text" placeholder="9465663009/info@shriproperty.com" />
			</Form.Item>

			<Form.Item
				label="Commission"
				name="commission"
				tooltip="how much commission you will given to the shriproperty"
				rules={[
					{ required: true, message: "Commission is required" },
					{ whitespace: true, message: "Commission must not be empty" },
				]}
			>
				<Input type="text" placeholder="1%" />
			</Form.Item>

			{categories.length > 0 && categories ? (
				<Form.Item
					label="Category"
					name="category"
					rules={[{ required: true, message: "Category is required" }]}
				>
					<Select
						defaultValue={categories.length > 0 ? categories[0].title : "Apartment"}
						options={categories.map((category) => {
							return {
								label: category.title,
								value: category._id,
							};
						})}
					/>
				</Form.Item>
			) : (
				<Spin />
			)}

			{propertyTypes.length > 0 && propertyTypes ? (
				<Form.Item
					label="Property Type"
					name="property_type"
					rules={[{ required: true, message: "Property Type is required" }]}
				>
					<Select
						defaultValue={
							propertyTypes.length > 0 ? propertyTypes[0].title : "Apartment"
						}
						options={propertyTypes.map((propertyType) => {
							return {
								label: propertyType.title,
								value: propertyType._id,
							};
						})}
					/>
				</Form.Item>
			) : (
				<Spin />
			)}

			<div className="flex justify-end">
				<Button type="primary" htmlType="submit">
					Next &rarr;
				</Button>
			</div>
		</Form>
	);
};

export default BasicDetailsForm;

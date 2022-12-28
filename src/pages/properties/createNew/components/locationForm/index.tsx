import { Button, Form, Input } from "antd";
import React, { FC } from "react";

interface LocationFormProps {
	setCurrentTab: (tab: number) => void;
}

const LocationForm: FC<LocationFormProps> = ({ setCurrentTab }) => {
	return (
		<Form
			id="1"
			className="hidden"
			autoComplete="off"
			layout="vertical"
			onFinish={() => setCurrentTab(2)}
		>
			<Form.Item
				label="Address"
				name="address"
				rules={[
					{ required: true, message: "Please fill the address" },
					{ whitespace: true, message: "Address must not be empty" },
					{ min: 5, message: "Address must be at least 5 characters long" },
					{ max: 200, message: "Address must be at most 200 characters long" },
				]}
			>
				<Input type="text" placeholder="#3011 near community center, sector 70" />
			</Form.Item>

			<Form.Item
				label="Locality"
				name="locality"
				rules={[
					{ required: true, message: "Please fill the Locality" },
					{ whitespace: true, message: "Locality must not be empty" },
					{ min: 3, message: "Locality must be at least 3 characters long" },
					{ max: 100, message: "Locality must be at most 100 characters long" },
				]}
			>
				<Input type="text" placeholder="Sector 70" />
			</Form.Item>

			<Form.Item
				label="City"
				name="city"
				rules={[
					{ required: true, message: "Please fill the City" },
					{ whitespace: true, message: "City must not be empty" },
					{ min: 3, message: "City must be at least 3 characters long" },
					{ max: 30, message: "City must be at most 30 characters long" },
				]}
			>
				<Input type="text" placeholder="Mohali" />
			</Form.Item>

			<Form.Item
				label="State"
				name="state"
				rules={[
					{ required: true, message: "Please fill the State" },
					{ whitespace: true, message: "State must not be empty" },
					{ min: 3, message: "State must be at least 3 characters long" },
					{ max: 30, message: "State must be at most 30 characters long" },
				]}
			>
				<Input type="text" placeholder="Punjab" />
			</Form.Item>

			<Form.Item
				label="Country"
				name="country"
				rules={[
					{ required: true, message: "Please fill the State" },
					{ whitespace: true, message: "State must not be empty" },
					{ min: 3, message: "State must be at least 3 characters long" },
					{ max: 30, message: "State must be at most 30 characters long" },
				]}
			>
				<Input type="text" placeholder="India" defaultValue="India" />
			</Form.Item>

			<Form.Item
				label="Pin Code"
				name="pin_code"
				rules={[
					{ required: true, message: "Pin Code is required" },
					{ whitespace: true, message: "Pin Code must not be empty" },
					{ min: 6, message: "Pin Code must be 6 digits long" },
					{ max: 6, message: "Pin Code must be 6 digits long" },
				]}
			>
				<Input type="number" placeholder="160071" />
			</Form.Item>

			<Form.Item label="Google Map Location" name="google_map_link">
				<Input type="text" placeholder="https://www.google.com/maps/..." />
			</Form.Item>

			<div className="flex justify-between">
				<Button type="primary" htmlType="button" onClick={() => setCurrentTab(0)}>
					&larr; Previous
				</Button>
				<Button type="primary" htmlType="submit">
					Next &rarr;
				</Button>
			</div>
		</Form>
	);
};

export default LocationForm;

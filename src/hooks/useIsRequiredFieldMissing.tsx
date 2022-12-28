import { FormInstance } from "antd";

/**
 * this hook will validate all fields
 *
 * @example
 * ```jsx
 *	const [isRequiredFieldMissing, setIsRequiredFieldMissing] = useState(true);
 *	const [form] = Form.useForm<{ verificationCode: string }>();
 *	const validateFields = useIsRequiredFieldMissing();
 *
 *  <Form form={form} onChange={() => validateFields(form, setIsRequiredFieldMissing)}>
 *		<Form.Item
 *			label="Verification Code"
 *			name="verificationCode"
 *			rules={[{ required: true, message: "Verification code is required" }]}
 *		>
 *			<Input placeholder="sent to email" />
 *		</Form.Item>
 *  </Form>
 * ```
 */
function useIsRequiredFieldMissing() {
	/**
	 * Check if all fields in the form are validating
	 *
	 * @param {FormInstance} form form instance from ant design
	 * @param {*} setIsFieldsValidating set state function to set isFieldsValidating
	 * @returns {boolean} true if any field is missing
	 *
	 * @example
	 * ```jsx
	 *  <Form form={form} onChange={() => validateFields(form, setIsRequiredFieldMissing)}>
	 *		<Form.Item
	 *			label="Verification Code"
	 *			name="verificationCode"
	 *			rules={[{ required: true, message: "Verification code is required" }]}
	 *		>
	 *			<Input placeholder="sent to email" />
	 *		</Form.Item>
	 *  </Form>
	 * ```
	 */
	return (form: FormInstance, setIsFieldsValidating: any): boolean => {
		const missingRequiredField = Object.values(form.getFieldsValue()).some(
			(value) => value === "" || !value,
		);

		setIsFieldsValidating(missingRequiredField);

		return missingRequiredField;
	};
}

export default useIsRequiredFieldMissing;

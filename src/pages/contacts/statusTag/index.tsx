import { Tag } from "antd";
import { PresetColorType } from "antd/lib/_util/colors";
import { EContactStatus } from "../../../types/enum";

interface StatusTagProps {
	/**
	 * Status of the contact
	 */
	status: EContactStatus;

	/**
	 * Additional class name
	 */
	className?: string;
}

function StatusTag({ status, className = "" }: StatusTagProps) {
	let color: PresetColorType = "red";

	if (status === EContactStatus["Pending"]) color = "red";
	else if (status === EContactStatus["In Progress"]) color = "gold";
	else if (status === EContactStatus["Completed"]) color = "green";

	return (
		<Tag color={color} className={className}>
			{status}
		</Tag>
	);
}

export default StatusTag;

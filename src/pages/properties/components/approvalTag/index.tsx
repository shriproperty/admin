import { Tag } from "antd";
import { PresetColorType } from "antd/lib/_util/colors";
import { FC } from "react";

interface ApprovedPropertyTagProps {
	/**
	 * Is user verified
	 */
	isApproved: boolean;
}

const ApprovedPropertyTag: FC<ApprovedPropertyTagProps> = ({ isApproved }) => {
	let color: PresetColorType = "red";

	if (isApproved) color = "green";
	else color = "red";

	return <Tag color={color}>{isApproved ? "Approved" : "Pending Approval"}</Tag>;
};

export default ApprovedPropertyTag;

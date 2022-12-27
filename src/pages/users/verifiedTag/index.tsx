import { Tag } from "antd";
import { PresetColorType } from "antd/lib/_util/colors";

interface VerifiedUserTagProps {
	/**
	 * Is user verified
	 */
	isVerified: boolean;
}

function VerifiedUserTag({ isVerified }: VerifiedUserTagProps) {
	let color: PresetColorType = "red";

	if (isVerified) color = "green";
	else color = "gold";

	return <Tag color={color}>{isVerified ? "Verified" : "Pending verification"}</Tag>;
}

export default VerifiedUserTag;

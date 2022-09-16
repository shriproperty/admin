import { Tag } from "antd";
import { PresetColorType } from "antd/lib/_util/colors";

interface VerifiedTagProps {
	/**
	 * Is user verified
	 */
	isVerified: boolean;
}

function VerifiedTag({ isVerified }: VerifiedTagProps) {
	let color: PresetColorType = "red";

	if (isVerified) color = "green";
	else color = "gold";

	return <Tag color={color}>{isVerified ? "Verified" : "Pending verification"}</Tag>;
}

export default VerifiedTag;

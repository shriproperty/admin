import { Spin } from "antd";

function FullPageLoader() {
	return (
		<div className="h-screen relative">
			<Spin
				size="large"
				className="!absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			/>
		</div>
	);
}

export default FullPageLoader;

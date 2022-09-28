import { Typography } from "antd";
import React from "react";
import Facilities from "./components/facilities";

function Categories() {
	return (
		<main className="px-16 py-10">
			<section>
				<Typography.Title level={3} underline>
					Facilities
				</Typography.Title>

				<Facilities />
			</section>
		</main>
	);
}

export default Categories;

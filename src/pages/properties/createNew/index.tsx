import { Steps } from "antd";
import { FC, useEffect, useState } from "react";
import BasicDetailsForm from "./components/basicDetailsForm";
import LocationForm from "./components/locationForm";
import SpecificationsForm from "./components/specifications";
import FurnishingDetailsForm from "./components/furnishingDetailsForm";

/**
 * TODO: other details
 * 1) possession
 * 2) maintenance
 * 3) security
 * 4) property age
 * 5) Construction status
 */

const CreateNewProperty: FC = () => {
	const [currentTab, setCurrentTab] = useState(3);

	useEffect(() => {
		const previousTabElement = document.getElementById(String(currentTab - 1));
		const currentTabElement = document.getElementById(String(currentTab));
		const nextTabElement = document.getElementById(String(currentTab + 1));

		previousTabElement?.classList.remove("block");
		previousTabElement?.classList.add("hidden");

		currentTabElement?.classList.remove("hidden");
		currentTabElement?.classList.add("block");

		nextTabElement?.classList.remove("block");
		nextTabElement?.classList.add("hidden");
	}, [currentTab]);

	return (
		<main className="px-16 py-10 flex justify-around">
			<div className="px-16">
				<Steps
					progressDot
					current={currentTab}
					direction="vertical"
					items={[
						{ title: "Basic Details" },
						{ title: "Location" },
						{ title: "Specifications" },
						{ title: "Furnishing Details" },
					]}
				/>
			</div>

			<div className="px-16 w-1/2">
				<BasicDetailsForm setCurrentTab={setCurrentTab} />
				<LocationForm setCurrentTab={setCurrentTab} />
				<SpecificationsForm setCurrentTab={setCurrentTab} />
				<FurnishingDetailsForm setCurrentTab={setCurrentTab} />
			</div>
		</main>
	);
};

export default CreateNewProperty;

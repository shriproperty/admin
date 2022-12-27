import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "./users.slice";
import { replacePropertiesReducer } from "../reducers/properties.reducer";

export interface IPropertyState {
	records: IProperty[];
}

const initialState: IPropertyState = {
	records: [],
};

const propertiesSlice = createSlice({
	name: "properties",
	initialState,
	reducers: {
		replaceProperties: replacePropertiesReducer,
	},
});

interface IAttachment {
	url: string;
	key: string;
}

interface Facility {
	_id: string;
	title: string;
	icon: string;
	key: string;
	createdAt: string;
	updatedAt: string;
}

interface Type {
	_id: string;
	title: string;
	createdAt: string;
	updatedAt: string;
}

export interface IProperty {
	_id: string;
	uid: number;
	featured: boolean;
	approved: boolean;
	images: IAttachment[];
	videos: IAttachment[];
	documents: IAttachment[];
	facilities: Facility[];
	createdAt: string;
	updatedAt: string;
	basic_details: {
		title: string;
		description: string;
		price: number;
		discounted_price?: number;
		size?: number;
		unit: Type;
		property_type: Type;
		category: Type;
		security_deposit?: number;
		monthly_maintenance?: number;
		construction_status?: Type;
		furnishing_status: Type;
		possession: Type;
		property_age: string;
		location: {
			address: string;
			locality: string;
			city: string;
			state: string;
			country: string;
			pin_code: number;
			google_map_link?: string;
		};
		owner: {
			name: string;
			contact: string;
			user: IUser;
		};
	};
	specifications: {
		direction:
			| "North"
			| "South"
			| "East"
			| "West"
			| "North-East"
			| "North-West"
			| "South-East"
			| "South-West";
		floor?: string;
		total_floors?: string;
		bed_rooms?: number;
		bath_rooms?: number;
		kitchens?: number;
		living_rooms?: number;
		dinning_rooms?: number;
		store_rooms?: number;
		pooja_rooms?: number;
		lobbies?: number;
		other_rooms?: number;
		balconies?: number;
		open_parking?: number;
		covered_parking?: number;
	};
	furnishing_details: {
		acs?: number;
		stoves?: number;
		wardrobes?: number;
		sofas?: number;
		dinning_tables?: number;
		beds?: number;
		geysers?: number;
		modular_kitchens?: number;
		fans: number;
		lights: number;
		refrigerators?: number;
		micro_ovens?: number;
		tvs?: number;
		dressing_tables?: number;
		tv_wall_panels?: number;
		washing_machines?: number;
		curtains?: number;
		water_purifiers?: number;
		exhaust?: number;
		dish_washers?: number;
		chimneys?: number;
	};
}

export const propertyActions = propertiesSlice.actions;
export default propertiesSlice;

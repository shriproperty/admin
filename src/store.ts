import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./slices/contacts.slice";
import usersSlice from "./slices/users.slice";
import propertiesSlice from "./slices/properties.slice";
import categorySlice from "./slices/category.slice";
import propertyTypeSlice from "./slices/propertyType.slice";
import unitSlice from "./slices/unit.slice";
import furnishingStatusSlice from "./slices/furnishingStatus.slice";
import facilitySlice from "./slices/facilities.slice";
import possessionSlice from "./slices/possession.slice";
import constructionStatusSlice from "./slices/constructionStatus.slice";

const store = configureStore({
	reducer: {
		contacts: contactsSlice.reducer,
		users: usersSlice.reducer,
		properties: propertiesSlice.reducer,
		categories: categorySlice.reducer,
		propertyType: propertyTypeSlice.reducer,
		unit: unitSlice.reducer,
		furnishingStatus: furnishingStatusSlice.reducer,
		facility: facilitySlice.reducer,
		possession: possessionSlice.reducer,
		constructionStatus: constructionStatusSlice.reducer,
	},
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export default store;

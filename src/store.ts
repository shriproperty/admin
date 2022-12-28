import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./slices/contacts.slice";
import usersSlice from "./slices/users.slice";
import propertiesSlice from "./slices/properties.slice";
import categorySlice from "./slices/category.slice";
import propertyTypeSlice from "./slices/propertyType.slice";

const store = configureStore({
	reducer: {
		contacts: contactsSlice.reducer,
		users: usersSlice.reducer,
		properties: propertiesSlice.reducer,
		categories: categorySlice.reducer,
		propertyType: propertyTypeSlice.reducer,
	},
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export default store;

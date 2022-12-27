import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./slices/contacts.slice";
import usersSlice from "./slices/users.slice";
import propertiesSlice from "./slices/properties.slice";

const store = configureStore({
	reducer: {
		contacts: contactsSlice.reducer,
		users: usersSlice.reducer,
		properties: propertiesSlice.reducer,
	},
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export default store;

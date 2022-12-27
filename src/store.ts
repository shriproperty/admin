import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./slices/contacts.slice";
import usersSlice from "./slices/users.slice";

const store = configureStore({
	reducer: {
		contacts: contactsSlice.reducer,
		users: usersSlice.reducer,
	},
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export default store;

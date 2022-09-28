import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/categories.slice";
import contactsSlice from "./slices/contacts.slice";
import usersSlice from "./slices/users.slice";

const store = configureStore({
	reducer: {
		contacts: contactsSlice.reducer,
		users: usersSlice.reducer,
		categories: categoriesSlice.reducer,
	},
});

export default store;

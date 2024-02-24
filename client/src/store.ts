import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import invoiceReducer from "./slices/invoiceSlice";
import activeInvoiceReducer from "./slices/activeInvoiceSlice";


const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    invoice:invoiceReducer,
    activeInvoice:activeInvoiceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
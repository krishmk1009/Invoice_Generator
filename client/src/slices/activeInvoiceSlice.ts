import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
type Row = {
    productName: string;
    productQuantity: number;
    productRate: number;
    productGst: number;
};

type activeInvoiceState = {
  rows: Row[];
  total: number | 0;
};

const initialState: activeInvoiceState = {
  rows: [{ productName: "", productQuantity: 0, productRate: 0, productGst: 0 }],
  total: 0,
};

const activeInvoiceSlice = createSlice({
  name: "activeInvoice",
  initialState,
  reducers: {
    setProduct(state, action: PayloadAction<Row[]>) {
      state.rows = action.payload;
    },
    setFinalTotal(state, action: PayloadAction<number>) {
      state.total = action.payload;
    },
  },
});


export const { setProduct, setFinalTotal } = activeInvoiceSlice.actions;
export const selectProducts = (state:RootState) => state.activeInvoice.rows;
export const selectFinalTotal = (state: RootState) => state.activeInvoice.total;

export default activeInvoiceSlice.reducer;

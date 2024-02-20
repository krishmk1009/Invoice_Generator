import { createSlice, createAsyncThunk, isAction } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstances";

type Product = {
  productName: string;
  quantity: number;
  rate: number;
  gst: number;
};

type Invoice = {
  products: Product[];
};

type InvoiceApiState = {
  invoices: Invoice[];
  status: "idle" | "loading" | "failed";
  error: string | null;
};

const initialState: InvoiceApiState = {
  invoices: [],
  status: "idle",
  error: null,
};


export const getInvoices = createAsyncThunk("get all invoices" , async (userId:string)=>{
    try {
        const response  = await axiosInstance.get(`/invoice/${userId}/invoices`)
        return response.data
    } catch (error:any) {
        console.log(error)
        throw(error)
    }
})

const invoiceSlice = createSlice({
    name:"invoice",
    initialState,
    reducers:{

    },
    extraReducers : (builder)=>{
        builder
            .addCase(getInvoices.pending , (state)=>{
                state.status = "loading"
                state.error = null
            })
            .addCase(getInvoices.fulfilled , (state,action)=>{
                state.status = "idle";
                state.invoices = action.payload
            })
            .addCase(getInvoices.rejected  , (state, action) =>{
                state.status = "idle",
                state.error=action.error.message || "Failed to fetch invoices"
            })
    }
})

export default invoiceSlice.reducer;

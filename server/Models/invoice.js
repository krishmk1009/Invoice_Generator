import mongoose, { Mongoose, mongo } from "mongoose";

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    productQuantity: {
        type: Number,
        required: true,
    },
    productRate: {
        type: Number,
        required: true,
    },
    productGst: {
        type: Number,
        required: true,
    }
})

const invoiceSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    products: [productSchema],
    
    total: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})



const Invoice = mongoose.model("Invoice", invoiceSchema)

export default Invoice
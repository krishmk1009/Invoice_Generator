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
    }
    ,
    products: [productSchema]
})

invoiceSchema.pre('save', function (next) {
    this.products.forEach((product) => {
        product.productTotal = product.productQty * product.productRate;
        product.productGST = 0.18 * product.productTotal;
    });
    next();
})


const Invoice = mongoose.model("Invoice", invoiceSchema)
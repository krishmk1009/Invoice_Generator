import Invoice from "../Models/invoice.js";

export const newInvoice= async(req,res)=>{

    try {
        const {user , name , products,total} = req.body

        const invoice = new Invoice({
            user,
            name,
            products,
            total
        }) 

        await invoice.save();
        res.status(201).json({ success: true, message: "Invoice created successfully", invoice });

        
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Failed to create invoice", error: error.message });

    }

}

export const getAllInvoicesUser=async(req,res)=>{

    try {
        const userId = req.params.userId;
        const Invoices = await Invoice.find({user:userId})
        res.status(200).json({success:true , Invoices})
    } catch (error) {
        
        res.status(500).json({success:false , message:"Failed to fetch invoices" , error: error.message})

    }
   
}
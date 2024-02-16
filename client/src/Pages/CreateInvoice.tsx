import React from "react";
import InvoiceForm from "../Components/InvoiceForm/InvoiceForm";
import InvoiceTable from "../Components/InvoicePage/InvoiceTable";

const CreateInvoice: React.FC = () => {
  return (
    <div className=" ">
        <InvoiceForm />
        <InvoiceTable />
      <div className="fixed bottom-0  w-full p-4 text-center bg-black">
        <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Invoice
        </button>
      </div>
    </div>
  );
};

export default CreateInvoice;

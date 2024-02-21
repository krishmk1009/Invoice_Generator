import React, { useState } from "react";
import InvoiceForm from "../Components/InvoiceForm/InvoiceForm";
import InvoiceTable from "../Components/InvoicePage/InvoiceTable";
import axiosInstance from "../api/axiosInstances";
import { FormDetails } from "../Components/InvoiceForm/typeInvoiceForm";

const CreateInvoice: React.FC = () => {
  const [companyData, setCompanyData] = useState<FormDetails>({
    name: "",
    address: "",
  });
  const [customerData, setCustomerData] = useState<FormDetails>({
    name: "",
    address: "",
  });
  const [rows, setRows] = useState([
    { productName: "", productQuantity: 0, productRate: 0, productGst: 0 },
  ]);
  const [total, setTotal] = useState<number>(0);
  const [userId, setUserId] = useState<string | undefined>("");

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Prevent default form submission behavior
  
    try {
      const requestData = {
        user: userId,
        name: "Invoice " + userId, 
        customerDetails: [customerData], 
        companyDetails: [companyData], 
        products: rows, 
        total: total 
      };
  
      const response = await axiosInstance.post("/invoice/new-invoice", requestData);
      console.log("Invoice created:", response.data);
      // Optionally handle success, e.g., show a success message or navigate to another page
    } catch (error) {
      console.error("Error creating invoice:", error);
      // Optionally handle error, e.g., show an error message
    }
  };

  return (
    <div className=" ">
      <InvoiceForm
        companyData={companyData}
        setCompanyData={setCompanyData}
        customerData={customerData}
        setCustomerData={setCustomerData}
      />
      <InvoiceTable
        rows={rows}
        setRows={setRows}
        total={total}
        setTotal={setTotal}
       
        setUser= {setUserId}
      />
      <div className="fixed bottom-0  w-full p-4 text-center bg-black">
        <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
          Create Invoice
        </button>
        <button className="mt-4 mx-5 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Generate PDF
        </button>
      </div>
    </div>
  );
};

export default CreateInvoice;

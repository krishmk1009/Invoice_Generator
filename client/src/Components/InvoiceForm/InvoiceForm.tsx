import React, { useState } from "react";
import { DetailFormProps , FormDetails } from "./typeInvoiceForm";



const DetailForm: React.FC<DetailFormProps> = ({
  formLabel,
  labelForName,
  labelForAddress,
  setData,
  data
 
}) => {
  
const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{


setData(data => ({
  ...data,
  [e.target.name]: e.target.value
}));



}

  return (
    <div className="w-1/2 p-6 border-r border-gray-300">
      <h2 className="text-2xl font-bold mb-4">{formLabel}</h2>
      <div className="mb-4">
        <label
          htmlFor={labelForName}
          className="block text-gray-700 font-bold mb-2"
        >
          Name:
        </label>
        <input
          type="text"
          value={data.name}
          name={labelForName}
        onChange={handleChange}
          className="form-input w-full border  rounded  h-8" 
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor={labelForName}
          className="block text-gray-700 font-bold mb-2"
        >
          Address:
        </label>
        <input
          type="text"
          value={data.address}
          name={labelForAddress}
          onChange={handleChange}
          className="form-input w-full border rounded  h-8"
        />
      </div>
    </div>
  );
};

interface InvoiceFormProps {
  companyData: FormDetails;
  setCompanyData: React.Dispatch<React.SetStateAction<FormDetails>>;
  customerData: FormDetails;
  setCustomerData: React.Dispatch<React.SetStateAction<FormDetails>>;
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({ companyData, setCompanyData, customerData, setCustomerData }) => {
  return (
    <div className="max-w-7xl mx-auto flex bg-gray-100 my-10 rounded">
      <DetailForm
        formLabel="Your Company details"
        labelForName="name"
        labelForAddress="address"
        setData={setCompanyData}
        data={companyData}
      />
      <DetailForm
        formLabel="Customer Details"
        labelForName="name"
        labelForAddress="address"
        setData={setCustomerData}
        data={customerData}
      />
    </div>
  );
};

export default InvoiceForm;
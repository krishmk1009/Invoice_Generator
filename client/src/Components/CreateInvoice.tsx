import React, { useState } from "react";
import InvoiceForm from "./InvoiceForm/InvoiceForm";

const ProductTable = () => {
  // State variables to store input values
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [tax, setTax] = useState("");

  // Hardcoded GST
  const gst = 18;

  // Calculate total
  const total = (quantity * rate * (1 + gst / 100)).toFixed(2);

  return (
    <div className="relative overflow-x-auto">

      <InvoiceForm />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Rate
            </th>
            <th scope="col" className="px-6 py-3">
              Tax
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Product name"
                className="border-0 focus:ring-0 focus:border-black"
              />
            </td>
            <td className="px-6 py-4">
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.valueAsNumber)}
                placeholder="Quantity"
                className="border-0 focus:ring-0 focus:border-black"
              />
            </td>
            <td className="px-6 py-4">
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.valueAsNumber)}
                placeholder="Rate"
                className="border-0 focus:ring-0 focus:border-black"
              />
            </td>
            <td className="px-6 py-4">
              <input
                type="number"
                value={tax}
                onChange={(e) => setTax(e.target.value)}
                placeholder="Tax"
                className="border-0 focus:ring-0 focus:border-black"
              />
            </td>
            <td className="px-6 py-4">
              ${total}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;

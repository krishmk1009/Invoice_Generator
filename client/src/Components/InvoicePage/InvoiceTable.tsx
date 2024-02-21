import React, { useState } from "react";

import InvoicePDF from "./InvoicePDF";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useAppSelector } from "../../hooks/redux-hooks";



interface Row {
    productName: string;
    productQuantity: number;
    productRate: number;
    productGst: number;
  }
  
  interface Props {
    rows: Row[];
    setRows: React.Dispatch<React.SetStateAction<Row[]>>;
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
    
    setUser: React.Dispatch<React.SetStateAction<string | undefined>>;
  }
  
  
const InvoiceTable: React.FC<Props> = ({rows, setRows , total, setTotal  , setUser}) => {
    

    const basicUserInfo = useAppSelector((state)=>state.auth.basicUserInfo);
    setUser(basicUserInfo?.id);

    
    

    const addRow = () => {
        setRows([...rows, { productName: "", productQuantity: 0, productRate: 0, productGst: 0 }]);
    };

    const deleteRow = (index: number) => {
        let updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRows(updatedRows);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { name, value } = e.target;
        const updatedRows = [...rows];
        updatedRows[index] = { ...updatedRows[index], [name]: value };
        setRows(updatedRows);
    };

    let finalTotal = rows.reduce((accumulator, currentValue) => {
        const subtotal = currentValue.productQuantity * currentValue.productRate;
        const productGstAmount = (subtotal * currentValue.productGst) / 100;
        
        return accumulator + subtotal + productGstAmount;
    }, 0);

    setTotal(finalTotal);


    

    const tableCellClasses: string = "px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200";
    const tableHeaderClasses: string = "px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase";

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead>
                                    <tr>
                                        <th scope="col" className={tableHeaderClasses}>Product Name</th>
                                        <th scope="col" className={tableHeaderClasses}>productQuantity</th>
                                        <th scope="col" className={tableHeaderClasses}>productRate</th>
                                        <th scope="col" className={tableHeaderClasses}>productGst</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {rows.map((row, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className={tableCellClasses}>
                                                    <input type="text" name="productName" placeholder="Enter Product Name"
                                                        value={row.productName}
                                                        onChange={(e) => handleInputChange(e, index)}
                                                    />
                                                </td>
                                                <td className={tableCellClasses}>
                                                    <input type="number" name="productQuantity" placeholder="Enter productQuantity"
                                                        value={row.productQuantity}
                                                        onChange={(e) => handleInputChange(e, index)}
                                                    />
                                                </td>
                                                <td className={tableCellClasses}>
                                                    <input type="number" name="productRate" placeholder="Enter productRate"
                                                        value={row.productRate}
                                                        onChange={(e) => handleInputChange(e, index)}
                                                    />
                                                </td>
                                                <td className={tableCellClasses}>
                                                    <input type="number" name="productGst" placeholder="Enter productGst"
                                                        value={row.productGst}
                                                        onChange={(e) => handleInputChange(e, index)}
                                                    />
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    INR {((row.productQuantity * row.productRate) + ((row.productQuantity * row.productRate * row.productGst) / 100))}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium text-red-600">
                                                    <button onClick={() => deleteRow(index)}>Delete</button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* Button to add new product */}
            <button className="mt-4 mx-5 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 " onClick={addRow}>
                Add Product  +
            </button>
            <InvoicePDF rows={rows} finalTotal={finalTotal} />
            <PDFDownloadLink
        document={<InvoicePDF rows={rows} finalTotal={finalTotal} />}
        fileName="invoice.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink>
            <p> total = {finalTotal}</p>
        </div>
    );
};

export default InvoiceTable;

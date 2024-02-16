import React, { useState } from "react";

const InvoiceTable: React.FC = () => {
    const [rows, setRows] = useState([
        { productName: "", quantity: 0, rate: 0 }
    ]);

    const addRow = () => {
        setRows([...rows, { productName: "", quantity: 0, rate: 0 }]);
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

    let finalTotal = rows.reduce((accumulator , currentValue)=>{
        return accumulator+ (currentValue.rate * currentValue.quantity);
    },0)

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
                                        <th scope="col" className={tableHeaderClasses}>Quantity</th>
                                        <th scope="col" className={tableHeaderClasses}>Rate</th>
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
                                                    <input type="number" name="quantity" placeholder="Enter Quantity"
                                                        value={row.quantity}
                                                        onChange={(e) => handleInputChange(e, index)}
                                                    />
                                                </td>
                                                <td className={tableCellClasses}>
                                                    <input type="number" name="rate" placeholder="Enter Rate"
                                                        value={row.rate}
                                                        onChange={(e) => handleInputChange(e, index)}
                                                    />
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    INR {row.quantity * row.rate}
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
            <p> total = {finalTotal}</p>
        </div>
    );
};

export default InvoiceTable;

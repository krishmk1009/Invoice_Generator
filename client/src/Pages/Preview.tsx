import React from 'react'
import PreviewDoc from '../Components/InvoicePage/InvoicePDF' // Import PreviewDoc instead of Preview
import { useAppSelector } from '../hooks/redux-hooks'

const Preview: React.FC = () => {
    const rows = useAppSelector((state) => state.activeInvoice.rows);
    const total = useAppSelector((state) => state.activeInvoice.total)

    

    console.log(rows , "this is from redux")

    return (
        <div>
            <PreviewDoc rows={rows} finalTotal={total} />
        </div>
    )
}

export default Preview

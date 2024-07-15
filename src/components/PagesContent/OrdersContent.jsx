import React, { useState } from 'react'
import SingleOrderSection from '../SingleOrderSection'

const OrdersContent = () =>
{
    const [index, setIndex] = useState(1)

    const colorClass = (id) =>
    {
        if (id === index)
        {
            return "selected"
        }
    }



    return (
        <div className="dashboard">
            <div className="dashboard_header">
                <p className='dashboard_title'>Orders</p>
                <div className='dashboard_tabs'>
                    <button onClick={() => setIndex(1)} className={colorClass(1)}>Ongoing 15</button>
                    <button onClick={() => setIndex(2)} className={colorClass(2)}>Completed 15</button>
                    <button onClick={() => setIndex(3)} className={colorClass(3)}>Cancelled 15</button>
                </div>
            </div>
            <div className="order order_page" style={{ height: "calc(100vh - 200px)" }}>
                <SingleOrderSection />
            </div>
        </div>
    )
}

export default OrdersContent
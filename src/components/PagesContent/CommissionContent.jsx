import React from 'react'
import CommissionSalesTable from '../Tables/Commission&SalesTable'

const CommissonContent = () =>
{

    return (
        <div className="dashboard">
            <div className="dashboard_header">
                <p className='dashboard_title'>All Sales and Commissions</p>
            </div>
            <div className="dashboard_queries">
                <CommissionSalesTable />
            </div>
            <div className="sales_bottom">
                <p className="">Total commission to be paid</p>
                <p className="">$300</p>
            </div>
        </div>
    )
}

export default CommissonContent
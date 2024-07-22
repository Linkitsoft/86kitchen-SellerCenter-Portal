import React from 'react'
import { queryData } from '../../utils/queryData'
import { dateTimeFormat } from '../../utils/dateTimeFormat'

const CommissionSalesTable = ({commissionData}) =>
{
    const header = ['Service Name', 'Date', 'Total Amount', 'Commission']

    return (
        <div className='eventTable'>
            <table id="table-to-xls">
                <tbody>
                    <tr>
                        {header?.map((item, index) => <th key={index}>{item}</th>)}
                    </tr>
                    {commissionData?.map((item, index) =>
                    {
                        return (
                            <tr key={index}>
                                <td>{item?.partnerService?.name}</td>
                                {/* <td>{item?.name}</td> */}
                                <td>{dateTimeFormat(item?.createdAt)}</td>
                                <td>{item?.servicePrice ? `$${item?.servicePrice}` : '-'}</td>
                                <td>{item?.profit ? `$${item?.profit}` : '-'}</td>
                                {/* <td><button className='eventTable_view' onClick={() => navigate('/orderDetails')}>View Details</button></td> */}
                            </tr >
                        );
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default CommissionSalesTable

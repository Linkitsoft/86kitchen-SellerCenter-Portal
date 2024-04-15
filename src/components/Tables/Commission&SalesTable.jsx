import React from 'react'
import { queryData } from '../../utils/queryData'

const CommissionSalesTable = () =>
{
    const header = ['Service Name', 'Name', 'Date', 'Total Amount', 'Commission']

    return (
        <div className='eventTable'>
            <table id="table-to-xls">
                <tbody>
                    <tr>
                        {header?.map((item, index) => <th key={index}>{item}</th>)}
                    </tr>
                    {queryData?.map((item, index) =>
                    {
                        return (
                            <tr key={index}>
                                <td>{item?.service}</td>
                                <td>{item?.name}</td>
                                <td>{item?.date}</td>
                                <td>{item?.amount}</td>
                                <td>{item?.commission}</td>
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

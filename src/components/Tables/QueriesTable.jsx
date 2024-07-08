import React from 'react'
import { useNavigate } from 'react-router-dom'
import { queryData } from '../../utils/queryData'

const QueriesTable = ({queryData}) =>
{
    const navigate = useNavigate()

    const header = ['Invoice No', 'Service Name', 'Name', 'Message', 'Date', 'Total Amount', 'Actions']
   
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
                                <td>{item?.no}</td>
                                <td>{item?.partnerService?.name}</td>
                                <td>{item?.marketplaceUser?.firstName} {item?.marketplaceUser?.lastName}</td>
                                <td>{item?.detail}</td>
                                <td>{item?.date}</td>
                                <td>${item?.partnerService?.price}</td>
                                <td><button className='eventTable_view' onClick={() => navigate(`/orderDetails?queryId=${item?.id}&customerId=${item?.marketplaceUser?.id}`)}>View Details</button></td>
                            </tr >
                        );
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default QueriesTable

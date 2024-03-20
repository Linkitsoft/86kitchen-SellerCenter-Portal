import React from 'react'
import { useNavigate } from 'react-router-dom'
import { queryData } from '../../util/queryData'

const QueriesTable = () =>
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
                                <td>{item?.service}</td>
                                <td>{item?.name}</td>
                                <td>{item?.msg}</td>
                                <td>{item?.date}</td>
                                <td>{item?.amount}</td>
                                <td><button className='eventTable_view' onClick={() => navigate('/orderDetails')}>View Details</button></td>
                            </tr >
                        );
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default QueriesTable

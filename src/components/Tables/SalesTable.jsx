import React from 'react'
import { salesData } from '../../utils/salesData';

const SalesTable = ({setModal}) =>
{

    const header = ['No.', 'Name', 'Amount', 'Commission']

    return (
        <div className='salesTable'>
            <div className="salesTable_content">
            <table id="table-to-xls">
                <tbody>
                    <tr>
                        {header?.map((item, index) => <th key={index} className={(item === 'Amount' || item === 'Commission') && "salesTable_rightRow"}>{item}</th>)}
                    </tr>
                    {salesData?.map((item, index) =>
                    {
                        return (
                            <tr key={index}>
                                <td>{item?.no}</td>
                                <td>
                                    <p className="salesTable_title">Limited Time Offers</p>
                                    <p>Yellow Storm Triple Typhoon 20 Mbps - Month cost $50, Ont time cost $100</p>
                                </td>
                               
                                <td className='salesTable_rightRow salesTable_title'>$150</td>
                                <td className='salesTable_rightRow salesTable_title'>$10</td>
                            </tr >
                        );
                    })}
                </tbody>
            </table>
            </div>
           
        </div >
    )
}

export default SalesTable

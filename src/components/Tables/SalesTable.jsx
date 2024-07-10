import React from 'react'

const SalesTable = ({queryId, selectedOptions}) =>
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
                    {selectedOptions?.map((item, index) =>
                    {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <p className="salesTable_title">{item?.name}</p>
                                    <p>{item?.description}</p>
                                </td>
                               
                                <td className='salesTable_rightRow salesTable_title'>${item?.price}</td>
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

import React from 'react'

const SalesTable = ({setModal}) =>
{

    const header = ['No.', 'Name', 'Amount']
    const data = [
        {
            no: "1",
            name: "Internet Connection",
        },
        {
            no: "2",
            name: "800 MB",
        },
        {
            no: "3",
            name: "Mega Discount",
        },
        {
            no: "4",
            name: "Cha100 % Fiber Optic Networkess",
        },
        {
            no: "5",
            name: "1 GB Connections",
        },

    ]


    return (
        <div className='salesTable'>
            <table id="table-to-xls">
                <tbody>
                    <tr>
                        {header?.map((item) => <th className={item === 'Amount' && "salesTable_rightRow"}>{item}</th>)}
                    </tr>
                    {data?.map((item) =>
                    {
                        return (
                            <tr>
                                <td>{item?.no}</td>
                                <td>
                                    <p className="salesTable_title">Limited Time Offers</p>
                                    <p>Yellow Storm Triple Typhoon 20 Mbps - Month cost $50, Ont time cost $100</p>
                                </td>
                               
                                <td className='salesTable_rightRow salesTable_title'>$150</td>
                            </tr >
                        );
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default SalesTable

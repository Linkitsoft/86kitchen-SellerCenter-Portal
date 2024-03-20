import React from 'react'

const CategoryTable = ({setModal}) =>
{

    const header = ['No.', 'Name', '']
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
        <div className='eventTable'>
            <table id="table-to-xls">
                <tbody>
                    <tr>
                        {header?.map((item, index) => <th key={index} className={item === '' && "eventTable_rightRow"}>{item}</th>)}
                    </tr>
                    {data?.map((item, index) =>
                    {
                        return (
                            <tr key={index}>
                                <td>{item?.no}</td>
                                <td>{item?.name}</td>
                               
                                <td className='eventTable_rightRow'><button className='eventTable_detail' onClick={() => setModal('edit')}>Edit Category</button></td>
                            </tr >
                        );
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default CategoryTable

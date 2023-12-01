import React from 'react'

const QueriesTable = () =>
{

    const header = ['Invoice No', 'Service Name', 'Name', 'Message', 'Date', 'Total Amount', 'Actions']
    const data = [
        {
            no: "1",
            service: "Limited Time Offers",
            name: "John",
            msg: "Hi i am samantha i like your services Yellow Storm Triple",
            date: "09 / 11 / 2023 - 08:53 PM",
            amount: "$520"
        },
        {
            no: "1",
            service: "Limited Time Offers",
            name: "John",
            msg: "Hi i am samantha i like your services Yellow Storm Triple",
            date: "09 / 11 / 2023 - 08:53 PM",
            amount: "$520"
        },
        {
            no: "1",
            service: "Limited Time Offers",
            name: "John",
            msg: "Hi i am samantha i like your services Yellow Storm Triple",
            date: "09 / 11 / 2023 - 08:53 PM",
            amount: "$520"
        },
        {
            no: "1",
            service: "Limited Time Offers",
            name: "John",
            msg: "Hi i am samantha i like your services Yellow Storm Triple",
            date: "09 / 11 / 2023 - 08:53 PM",
            amount: "$520"
        },
        {
            no: "1",
            service: "Limited Time Offers",
            name: "John",
            msg: "Hi i am samantha i like your services Yellow Storm Triple",
            date: "09 / 11 / 2023 - 08:53 PM",
            amount: "$520"
        },
        {
            no: "1",
            service: "Limited Time Offers",
            name: "John",
            msg: "Hi i am samantha i like your services Yellow Storm Triple",
            date: "09 / 11 / 2023 - 08:53 PM",
            amount: "$520"
        },
    ]


    return (
        <div className='eventTable'>
            <table id="table-to-xls">
                <tbody>
                    <tr>
                        {header?.map((item) => <th>{item}</th>)}
                    </tr>
                    {data?.map((item) =>
                    {
                        return (
                            <tr>
                                <td>{item?.no}</td>
                                <td>{item?.service}</td>
                                <td>{item?.name}</td>
                                <td>{item?.msg}</td>
                                <td>{item?.date}</td>
                                <td>{item?.amount}</td>
                                <td><button className='eventTable_view'>View Details</button></td>
                            </tr >
                        );
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default QueriesTable

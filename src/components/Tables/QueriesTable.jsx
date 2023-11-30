import React from 'react'

const QueriesTable = () =>
{

    const header = ['No.', 'Name', 'Email', 'Gender', 'Team Name', 'Phone No', 'Actions']
    const data = [
        {
            no: "1",
            name: "Amenda John",
            email: "amenda@gmail.com",
            gender: "Male",
            team: "Wildcat",
            phone: "+60 022 2666"
        },
        {
            no: "1",
            name: "Amenda John",
            email: "amenda@gmail.com",
            gender: "Male",
            team: "Wildcat",
            phone: "+60 022 2666"
        },
        {
            no: "1",
            name: "Amenda John",
            email: "amenda@gmail.com",
            gender: "Male",
            team: "Wildcat",
            phone: "+60 022 2666"
        },
        {
            no: "1",
            name: "Amenda John",
            email: "amenda@gmail.com",
            gender: "Male",
            team: "Wildcat",
            phone: "+60 022 2666"
        },
        {
            no: "1",
            name: "Amenda John",
            email: "amenda@gmail.com",
            gender: "Male",
            team: "Wildcat",
            phone: "+60 022 2666"
        },
        {
            no: "1",
            name: "Amenda John",
            email: "amenda@gmail.com",
            gender: "Male",
            team: "Wildcat",
            phone: "+60 022 2666"
        },
        {
            no: "1",
            name: "Amenda John",
            email: "amenda@gmail.com",
            gender: "Male",
            team: "Wildcat",
            phone: "+60 022 2666"
        },
        {
            no: "1",
            name: "Amenda John",
            email: "amenda@gmail.com",
            gender: "Male",
            team: "Wildcat",
            phone: "+60 022 2666"
        },
        {
            no: "1",
            name: "Amenda John",
            email: "amenda@gmail.com",
            gender: "Male",
            team: "Wildcat",
            phone: "+60 022 2666"
        },
        {
            no: "1",
            name: "Amenda John",
            email: "amenda@gmail.com",
            gender: "Male",
            team: "Wildcat",
            phone: "+60 022 2666"
        },
        {
            no: "1",
            name: "Amenda John",
            email: "amenda@gmail.com",
            gender: "Male",
            team: "Wildcat",
            phone: "+60 022 2666"
        },
        {
            no: "1",
            name: "Amenda John",
            email: "amenda@gmail.com",
            gender: "Male",
            team: "Wildcat",
            phone: "+60 022 2666"
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
                                <td>{item?.name}</td>
                                <td>{item?.email}</td>
                                <td>{item?.gender}</td>
                                <td>{item?.team}</td>
                                <td>{item?.phone}</td>
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

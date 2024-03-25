import React from 'react'
import { usersData } from '../../util/usersData'

const ObservantUsersTable = () =>
{
    const header = ['No', 'Name', 'Email', 'Phone No']
   
    return (
        <div className='eventTable'>
            <table id="table-to-xls">
                <tbody>
                    <tr>
                        {header?.map((item, index) => <th key={index}>{item}</th>)}
                    </tr>
                    {usersData?.map((item, index) =>
                    {
                        return (
                            <tr key={index}>
                                <td>{item?.no}</td>
                                <td>{item?.name}</td>
                                <td>{item?.email}</td>
                                <td>{item?.phone}</td>
                            </tr >
                        );
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default ObservantUsersTable

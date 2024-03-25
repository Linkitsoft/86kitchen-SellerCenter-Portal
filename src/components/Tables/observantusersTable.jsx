import React from 'react'
import { usersData } from '../../utils/usersData'

const ObservantUsersTable = () =>
{
    const header = ['No', 'Name', 'Email', 'Phone No', 'Enable/Disable']
   
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
                                <td>
                                    <label className="switch">
                                        <input
                                            // onChange={() => handleToggler(res)}
                                            type="checkbox"
                                        // checked={res?.isActive === true ? true : false}
                                        />
                                        <span className="slider round"></span>
                                    </label>
                                </td>
                            </tr >
                        );
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default ObservantUsersTable

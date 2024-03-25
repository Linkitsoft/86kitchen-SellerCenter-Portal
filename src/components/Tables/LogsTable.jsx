import React from 'react'
import { logsData } from '../../utils/logsData';

const LogsTable = () =>
{
    const header = ["Time", "Name", "Email", "Log Message"]
   

    return (
        <div className='eventTable'>
            <table id="table-to-xls">
                <tbody>
                    <tr>
                        {header?.map((item, index) => <th key={index}>{item}</th>)}
                    </tr>
                    {logsData?.map((item, index) =>
                    {
                        return (
                            <tr>
                                <td>2/12/2024 2:50pm</td>
                                <td>John</td>
                                <td>john@gmail.com</td>
                                <td>{item?.message}</td>
                            </tr >
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default LogsTable




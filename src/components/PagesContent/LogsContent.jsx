import React from 'react'
import LogsTable from '../../components/Tables/LogsTable'


const LogsContent = () =>
{

    return (
        <div className="dashboard">
            <div className="dashboard_topBar">
                <div>
                    <p className='dashboard_title'>All Logs</p>
                </div>
                {/* <div className='dashboard_inputWrap'>
                    <i class="fa-solid search fa-magnifying-glass"></i>
                    <input type="text" placeholder='Search Name & Email' />
                </div> */}
            </div>
            <div className="dashboard_queries">
                <LogsTable />
            </div>
        </div>
    )
}
export default LogsContent
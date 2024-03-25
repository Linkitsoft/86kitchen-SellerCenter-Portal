import React from 'react'
import AdminUsersTable from '../Tables/AdminusersTable'

const AllAdminUsersContent = () =>
{

    return (
        <div className="dashboard">
            <div className="dashboard_header">
                <p className='dashboard_title'>All Admin Users</p>
            </div>
            <div className="dashboard_queries">
                <AdminUsersTable />
            </div>
        </div>
    )
}

export default AllAdminUsersContent
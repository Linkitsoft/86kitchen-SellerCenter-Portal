import React from 'react'
import ObservantUsersTable from '../Tables/observantusersTable'

const AllObservantUsersContent = () =>
{

    return (
        <div className="dashboard">
            <div className="dashboard_header">
                <p className='dashboard_title'>All Observant Users</p>
            </div>
            <div className="dashboard_queries">
                <ObservantUsersTable />
            </div>
        </div>
    )
}

export default AllObservantUsersContent
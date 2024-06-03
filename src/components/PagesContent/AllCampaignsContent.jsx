import React from 'react'
import AllCampaignsTable from '../Tables/AllCampaignsTable'

const AllCampaignsContent = () =>
{

    return (
        <div className="dashboard">
            <div className="dashboard_header">
                <p className='dashboard_title'>All campaigns </p>
            </div>
            <div className="dashboard_queries">
                <AllCampaignsTable />
            </div>
        </div>
    )
}

export default AllCampaignsContent
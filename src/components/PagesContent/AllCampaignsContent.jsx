import React, { useState } from 'react'
import AllCampaignsTable from '../Tables/AllCampaignsTable'
import ViewCampaignFullImage from '../Modals/ViewCampaignFullImage '

const AllCampaignsContent = () =>
{
const [modal,setModal] = useState(false)
    return (
        <div className="dashboard">
            <div className="dashboard_header">
                <p className='dashboard_title'>All Campaigns </p>
            </div>
            {modal === "view" && <ViewCampaignFullImage setModal={setModal} />}
            <div className="dashboard_queries">
                <AllCampaignsTable setModal={setModal}/>
            </div>
        </div>
    )
}

export default AllCampaignsContent
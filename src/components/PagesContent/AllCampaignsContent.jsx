import React, { useState } from 'react'
import AllCampaignsTable from '../Tables/AllCampaignsTable'
import ViewCampaignFullImage from '../Modals/ViewCampaignFullImage '
// import Clickoutside from '../Clickoutside/Clickoutside'
import ViewCampaignDetail from '../Modals/ViewCampaignDetail'

const AllCampaignsContent = () => {
    const [modal, setModal] = useState(false)
    const [viewModal, setViewModal] = useState(false)
    const [status, setStatus] = useState("All")
    const [item, setItem] = useState({})

    return (
        <div className="dashboard">
            <div className="dashboard_header">
                <p className='dashboard_title'>{status} Campaigns </p>
                <select onChange={(e) => setStatus(e.target.value)} value={status} style={{ borderRadius: "4px", width: "270px", fontWeight: "normal", padding: "10px" }}>
                    <option disabled>Select Status</option>
                    <option value="All">All</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Expired">Expired</option>
                    <option value="Upcoming">Upcoming</option>
                </select>
            </div>
            {viewModal && <ViewCampaignDetail setModal={setViewModal} item={item}/>}
            {modal === "view" && <ViewCampaignFullImage setModal={setModal} />}
            <div className="dashboard_queries">
                <AllCampaignsTable setModal={setModal} status={status} setViewModal={setViewModal}setItem={setItem} />
            </div>
        </div>
    )
}

export default AllCampaignsContent
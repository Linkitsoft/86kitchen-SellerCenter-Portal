import { useState } from "react";
import AdSlotManagementTable from "../Tables/AdSlotManagementTable";
import CreateAdvertisementSlot from "../Modals/CreateAdvertisementSlot";


const AdSlotManagementComponent = ({ }) => {
    const [status, setStatus] = useState("All")
    const [modal, setModal] = useState(true)
    return (
        <>
        {modal && <CreateAdvertisementSlot/>}
        <div className="dashboard">
            <div className="dashboard_header">
            <p className='dashboard_title'>{status} Advertisement Slots </p>
                <select onChange={(e) => setStatus(e.target.value)} value={status} style={{ borderRadius: "4px", width: "270px", fontWeight: "normal", padding: "10px" }}>
                    <option disabled>Select Status</option>
                    <option value="All">All</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </div>
            <div className="dashboard_queries">
                <AdSlotManagementTable status={status} setModal={setModal}/>
            </div>
        </div>
        </>
    );
};

export default AdSlotManagementComponent
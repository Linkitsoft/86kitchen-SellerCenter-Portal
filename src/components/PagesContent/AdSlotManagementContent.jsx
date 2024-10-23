import { useState } from "react";
import AdSlotManagementTable from "../Tables/AdSlotManagementTable";
import CreateAdvertisementSlot from "../Modals/CreateAdvertisementSlot";


const AdSlotManagementComponent = ({ }) => {
    const [status, setStatus] = useState("All")
    const [modal, setModal] = useState("")
    return (
        <>
            {modal === "create" && <CreateAdvertisementSlot setModal={setModal} />}
            <div className="dashboard">
                <div className="dashboard_header">
                    <div>
                        <p className='dashboard_title'>{status} Advertisement Slots </p>
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <select onChange={(e) => setStatus(e.target.value)} value={status} style={{ borderRadius: "4px", width: "270px", fontWeight: "normal", padding: "10px" }}>
                            <option disabled>Select Status</option>
                            <option value="All">All</option>
                            <option value="Accepted">Accepted</option>
                            <option value="Ongoing">Ongoing</option>
                        </select>
                        <button onClick={() => { setModal("create") }}>Create Advertisement</button>
                    </div>
                </div>
                <div className="dashboard_queries">
                    <AdSlotManagementTable status={status} setModal={setModal} />
                </div>
            </div>
        </>
    );
};

export default AdSlotManagementComponent
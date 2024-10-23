import { useEffect, useState } from "react";
import AdSlotManagementTable from "../Tables/AdSlotManagementTable";
import CreateAdvertisementSlot from "../Modals/CreateAdvertisementSlot";
import { adSlotData } from '../../utils/adSlotData'

const AdSlotManagementComponent = ({ }) => {
    const [status, setStatus] = useState("All")
    const [modal, setModal] = useState("")

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
            document.body.style.overflow = ""; // Re-enable scrolling
        }

        // Cleanup to ensure no side effects
        return () => {
            document.body.style.overflow = "";
        };
    }, [modal]);

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
                    <AdSlotManagementTable status={status} setModal={setModal} data={adSlotData}/>
                </div>
            </div>
        </>
    );
};

export default AdSlotManagementComponent
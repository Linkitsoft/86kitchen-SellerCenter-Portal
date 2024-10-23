import { useEffect, useState } from "react";
import AdSlotManagementTable from "../Tables/AdSlotManagementTable";
import CreateAdvertisementSlot from "../Modals/CreateAdvertisementSlot";
import { adSlotData } from '../../utils/adSlotData'
import AdSlotManagementHistoryTable from "../Tables/AdSlotManagementHistoryTable";
import RebidAdvertisement from "../Modals/RebidAdvertisement";

const AdSlotManagementHistoryComponent = ({ }) => {
    const [status, setStatus] = useState("Rejected")
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
            {modal === "create" && <RebidAdvertisement setModal={setModal} />}
            <div className="dashboard">
                <div className="dashboard_header">
                    <div>
                        <p className='dashboard_title'>{status} Advertisement Slots </p>
                    </div>
                </div>
                <div className="dashboard_queries">
                    <AdSlotManagementHistoryTable status={status} setModal={setModal} data={adSlotData} />
                </div>
            </div>
        </>
    );
};

export default AdSlotManagementHistoryComponent
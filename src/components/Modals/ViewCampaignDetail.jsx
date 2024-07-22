import React, { useEffect, useRef } from 'react'
import Clickoutside from '../Clickoutside/Clickoutside';
import buildImg from "../../assets/images/Marketplace-Assets-40.png";
import { dateFormat } from '../../utils/dateFormat';
const ViewCampaignDetail = ({ setModal, item }) => {
    const Ref = useRef();
    const Ref2 = useRef();
    useEffect(() => {
        Clickoutside(Ref, Ref2, setModal)
        // eslint-disable-next-line
    }, []);
    function formatKey(key) {
        return key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
    }

    console.log(item)
    return (
        <div ref={Ref} className='viewCampaignDetail'>
            <div ref={Ref2} className='viewCampaignDetail_inner'>
                <p className='viewCampaignDetail_topHead'>Campaign Details</p>
                <img className='viewCampaignDetail_img' src={buildImg} alt='' />
                {Object.entries(item).map(([key, value]) => {
                    console.log(key);
                    return (
                        <div className='viewCampaignDetail_list' key={key}>
                            <div>
                                <p style={{ fontSize: '14px', fontWeight: "600" }}>{formatKey(key)}</p>
                            </div>
                            <div style={{ textAlign: "right" }}>
                                <span style={{ fontSize: "12px", fontWeight: '600', color: value === "Rejected" ? "red" : (value === "Accepted" ? "green" : "") }} className='viewCampaignDetail_categoryValue'>
                                    {key === "startDate" ||key === "endDate" || key === "rejectedDate"? dateFormat(value): value}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div >
    )
}
export default ViewCampaignDetail
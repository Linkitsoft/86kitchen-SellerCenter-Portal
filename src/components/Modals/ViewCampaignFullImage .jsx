import React, { useEffect, useRef } from 'react'
import buildImg from "../../assets/images/Marketplace-Assets-40.png"
import Clickoutside from '../../components/Clickoutside/Clickoutside';
const ViewCampaignFullImage = ({ setModal }) => {
    const Ref = useRef()
    const Ref2 = useRef()
    useEffect(() => {
        Clickoutside(Ref, Ref2, setModal)
    }, [])
    return (
        <div ref={Ref} className='viewCampaignFullImage'>
            <div ref={Ref2} className='viewCampaignFullImage_inner'>
                <img src={buildImg} alt="buildImg" className='viewCampaignFullImage_img' />
            </div>
        </div>
    )
}
export default ViewCampaignFullImage
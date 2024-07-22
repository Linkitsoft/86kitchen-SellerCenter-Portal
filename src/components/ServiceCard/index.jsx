import React from 'react'
import user from "../../assets/images/Admin-20 (14).png"
import arrow from "../../assets/images/Admin-20 (30).png"
import card5 from "../../assets/images/Admin-20 (26).png"

const ServiceCard = ({setService, item, setModal}) =>
{
    return (
        <div className='serviceCard' onClick={() => {setService(item); setModal('view')}}>
            <div className="">
                <img className="serviceCard_img" src={card5} alt=''/>
                <div className="serviceCard_user">
                    <img src={user} alt=''/>
                    <p>{12}</p>
                </div>
            </div>
            <div className="serviceCard_main">
                <div className="serviceCard_head">
                    <p>{item?.name}</p>
                    <img src={arrow} alt=''/>
                </div>
                <p className="serviceCard_desc">{item?.description}</p>
                <div className="serviceCard_head">
                    <p className='total'>Total Cost:</p>
                    <p>{item?.price}</p>
                </div>

            </div>
        </div>
    )
}

export default ServiceCard
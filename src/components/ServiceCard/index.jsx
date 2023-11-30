import React from 'react'
import user from "../../assets/images/Admin-20 (14).png"
import arrow from "../../assets/images/Admin-20 (30).png"

const ServiceCard = ({item}) =>
{
    return (
        <div className='serviceCard'>
            <div className="">
                <img className="serviceCard_img" src={item?.image} alt=''/>
                <div className="serviceCard_user">
                    <img src={user} alt=''/>
                    <p>{item?.users}</p>
                </div>
            </div>
            <div className="serviceCard_main">
                <div className="serviceCard_head">
                    <p>{item?.title}</p>
                    <img src={arrow} alt=''/>
                </div>
                <p className="serviceCard_desc">{item?.des}</p>
                <div className="serviceCard_head">
                    <p className='total'>Total Cost:</p>
                    <p>{item?.cost}</p>
                </div>

            </div>
        </div>
    )
}

export default ServiceCard
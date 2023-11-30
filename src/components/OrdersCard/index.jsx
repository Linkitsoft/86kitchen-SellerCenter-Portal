import React from 'react'
import loc from "../../assets/images/Admin-20 (90).png"
import card1 from "../../assets/images/Admin-20 (22).png"
import arrow from "../../assets/images/Admin-20 (30).png"

const OrdersCard = () =>
{
    return (
        <div className='order_single'>
            <div className="order_cardTop">
                <p>09/11/2023 - 08:53 PM</p>
                <button>View Details</button>
            </div>
            <div className="order_content">
                <img className="order_img" src={card1} alt='' />
                <div>
                    <p className="order_head">Limited Time Offers</p>
                    <p className="order_desc">Name: Samentha John</p>
                    <p className="order_desc">Details: Hi i am samantha i like your services Yellow...</p>
                    <p className="order_loc"><img src={loc} alt='' /> 17230 NE Sacramento...</p>
                </div>
            </div>
            <div className="order_bottom">
                <div className="">
                    <p>Status</p>
                    <button className="selected">In Review</button>
                    <button>Production</button>
                    <button>Completed</button>
                </div>
                <img src={arrow} alt='' />
            </div>
        </div>
    )
}

export default OrdersCard
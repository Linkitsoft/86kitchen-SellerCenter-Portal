import React from 'react'
import loc from "../../assets/images/Admin-20 (90).png"
import card1 from "../../assets/images/Admin-20 (22).png"
import arrow from "../../assets/images/Admin-20 (30).png"
import { useNavigate } from 'react-router-dom'

const OrdersCard = ({ item }) =>
{
    const navigate = useNavigate()

    const handleNavigate = (item) => {
        navigate(`/orderDetails?orderId=${item?.id}&queryId=${ item?.queryId }&customerId=${ item?.marketplaceUser?.id }`)
    }
    return (
        <div className='order_single'>
            <div className="order_cardTop">
                <p>09/11/2023 - 08:53 PM</p>
                <button onClick={() => handleNavigate(item)}>View Details</button>
            </div>
            <div className="order_content">
                <img className="order_img" src={card1} alt='' />
                <div>
                    <p className="order_head">{item?.orderServices && item?.orderServices[0]?.partnerService?.name}</p>
                    <p className="order_desc">Name: {item?.marketplaceUser?.firstName} {item?.marketplaceUser?.lastName}</p>
                    <p className="order_desc">Details: Hi i am samantha i like your services Yellow...</p>
                    <p className="order_loc"><img src={loc} alt='' /> {item?.marketplaceUser?.address1}</p>
                </div>
            </div>
            <div className="order_bottom">
                <div className="">
                    <p>Status</p>
                    <button className="selected">In Review</button>
                    <button>Production</button>
                    <button>Completed</button>
                </div>
                <img onClick={() => handleNavigate(item)} src={arrow} alt='' />
            </div>
        </div>
    )
}

export default OrdersCard
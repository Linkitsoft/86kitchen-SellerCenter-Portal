import React from 'react'
import back from "../../assets/images/Admin-20 (29).png"
import { useNavigate } from 'react-router-dom'
import OrderDetailChat from '../../components/OrderDetailChat'
import OrderDetailCards from '../../components/OrderDetailCard'

const OrderDetails = () =>
{
    const navigate = useNavigate()

    return (
        <div className="od">
        <div className="od_header">
            <p className="od_title"><img src={back} alt='' onClick={() => navigate(-1)} />Samentha John - Invoice No: 001 </p>
            <div className="od_date">Submission date : <span>09 / 11 / 2023 - 08:53 PM</span></div>
        </div>
        <div className="od_main">
            <OrderDetailCards />
            <OrderDetailChat />
        </div>
    </div>
    )
}

export default OrderDetails

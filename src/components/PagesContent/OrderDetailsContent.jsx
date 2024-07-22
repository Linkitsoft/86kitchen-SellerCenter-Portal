import React, { useEffect, useState } from 'react'
import back from "../../assets/images/Admin-20 (29).png"
import { useNavigate } from 'react-router-dom'
import OrderDetailChat from '../../components/OrderDetailChat'
import OrderDetailCards from '../../components/OrderDetailCard'
import { searchUrl } from '../../utils/searchUrl'
import { GetOrderById } from '../../Services/Partner'
import { dateTimeFormat } from '../../utils/dateTimeFormat'

const OrderDetailsContent = () =>
{
    const navigate = useNavigate()
    const queryId = searchUrl('queryId')
    const customerId = searchUrl('customerId')

    const orderId = searchUrl('orderId')

    const [orderData, setOrderData] = useState({})

    const getorderData = async () =>
    {
        const res = await GetOrderById({ orderId })
        setOrderData(res?.data?.data)
    }

    useEffect(() =>
    {
        getorderData()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="od">
            <div className="od_header">
                <p className="od_title"><img src={back} alt='' onClick={() => navigate(-1)} />{orderData?.marketplaceUser?.firstName}</p>
                <div className="od_date">Submission date : <span>{dateTimeFormat(orderData?.createdAt)}</span></div>
            </div>
            <div className="od_main">
                <OrderDetailCards queryId={queryId} orderData={orderData} customerId={customerId}/>
                <OrderDetailChat orderData={orderData} customerId={customerId} queryId={queryId}/>
            </div>
        </div>
    )
}

export default OrderDetailsContent

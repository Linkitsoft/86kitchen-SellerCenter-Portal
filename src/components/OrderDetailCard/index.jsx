import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bg from "../../assets/images/Admin-20 (22).png"
import { searchUrl } from '../../utils/searchUrl'
import { GetOrderById } from '../../Services/Partner'

const OrderDetailCard = ({ customerId, queryId }) =>
{
    const navigate = useNavigate()
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
    }, [])

    return (
        <div className="od_left">
            <div>
                <div className="od_header">
                    <p className="od_subhead">Order Details</p>
                    <p className="od_cost">Total Cost: <span>${orderData?.total}</span></p>
                </div>
                <div className="od_section">
                    {orderData?.orderServices?.map((x, index) => (
                        <>
                            <p className="od_no">Order no {index + 1}</p>
                            <img className="od_img" src={bg} alt='' />
                            <p className="od_head">{x?.partnerService?.name}</p>
                            <p className="od_desc">{x?.partnerService?.description}</p>
                        </>
                    ))}
                </div>
            </div>
            {/* <button className="od_btn" onClick={() => navigate(`/generateSales?queryId=${ queryId }&customerId=${ customerId }`)}>Generate Sales</button> */}
        </div>
    )
}

export default OrderDetailCard
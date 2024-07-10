import React from 'react'
import { useNavigate } from 'react-router-dom'
import bg from "../../assets/images/Admin-20 (22).png"

const QueryDetailCard = ({ customerId, queryId }) =>
{
    const navigate = useNavigate()

    return (
        <div className="od_left">
            <div>
                <div className="od_header">
                    <p className="od_subhead">Query Details</p>
                    <p className="od_cost">Total Cost: <span>$150</span></p>
                </div>
                <img className="od_img" src={bg} alt='' />
                <p className="od_head">Limited Time Offers</p>
                <p className="od_desc">Hi i am samantha i like your services Yellow
                    Storm Triple Typhoon 20 Mbps - Month cost
                    $50, Ont time cost $100</p>
            </div>
            {<button className="od_btn" onClick={() => navigate(`/generateSales?queryId=${ queryId }&customerId=${ customerId }`)}>Generate Sales</button>}
        </div>
    )
}

export default QueryDetailCard
import React from 'react'
import backImg from "../../assets/images/Admin-20 (29).png"
import loc from "../../assets/images/Admin-20 (90).png"
import { useNavigate } from 'react-router-dom'
import SalesTable from '../Tables/SalesTable'

const GenerateSalesContent = () =>
{
    const navigate = useNavigate()

    return (
        <div className="sales">
            <div className="sales_header">
                <p className="sales_title"><img src={backImg} alt='' onClick={() => navigate(-1)} />Generate Sales</p>
                <div>
                    <p className="sales_text">Name : Samentha John</p>
                    <p className="sales_text">Business Name : Coffee & Restaurant</p>
                    <p className="sales_loc"><img src={loc} alt='' /> 17230 NE Sacramento...</p>
                </div>
            </div>
            <div className="sales_input">
                <p>Select Service Name</p>
                <select>
                    <option>Select Services</option>
                    <option>Internet</option>
                    <option>Storm Fiber</option>
                </select>
            </div>
            <SalesTable />
            <div className="sales_bottom">
                <p className="">Total Tax</p>
                <p className="">$100</p>
            </div>
            <div className="sales_total">
                <p>Total Amount: <span>$550</span></p>
                <button className="sales_btn">Initiate Sale</button>
            </div>
        </div>
    )
}

export default GenerateSalesContent

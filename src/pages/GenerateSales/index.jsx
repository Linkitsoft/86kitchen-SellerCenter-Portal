import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Thankyou from '../../components/Modals/Thankyou'
import backImg from "../../assets/images/Admin-20 (29).png"
import loc from "../../assets/images/Admin-20 (90).png"
import { useNavigate } from 'react-router-dom'
import SalesTable from '../../components/Tables/SalesTable'

const GenerateSales = () =>
{
    const [modal, setModal] = useState("");
    const navigate = useNavigate()

    return (
        <div>
            <div className="mainLayout">
                {modal === 'verify' && <Thankyou setModal={setModal} />}
                <div className="mainLayout_parent">
                    <Sidebar index={"-1"} />
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenerateSales

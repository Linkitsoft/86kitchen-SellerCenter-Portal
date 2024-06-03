import React, { useState } from 'react'
// import Sidebar from '../../components/Sidebar'
import totalVendorImg from "../../assets/images/Admin-20 (82).png"
import totalCustomersImg from "../../assets/images/Admin-20 (83).png"
import customerReq from "../../assets/images/Admin-20 (84).png"
import DonutChart from '../../components/Graph/DonutChart'
import AreaChart from '../../components/Graph/AreaChart'
import DashboardTopCards from '../DashboardTopCards'
import MainServiceSection from '../MainServiceSection'
import OrdersTab from '../OrdersTab'
import OrdersCard from '../OrdersCard'
function SalesAnalysisContent() {

    const [modal, setModal] = useState()
    // const [obj] = useState()
    // const navigate = useNavigate()
    // const roles = useUserRole();
    const data = [
        {
            text: "Total Sales",
            number: "$1500.00",
            pic: customerReq,   
        },
        {
            text: "Total Products",
            number: "20",
            pic: totalCustomersImg,   
        },
        {
            text: "Highest Selling Products",
            number: "Storm Fiber",  
            pic: totalVendorImg,  
        },
        // {
        //     text: "Least Selling Products",
        //     number: "5%",   
        //     pic: totalVendorImg,   
        // },
        {
            text: "Least Selling Products",
            number: "Sony",   
            pic: totalVendorImg,  
        },
    ];
    

    return (
        <div className="dashboard">
            <p className="dashboard_title">Sales Analysis</p>
            <DashboardTopCards data={data} />
            <div className="dashboard_content">
                <div className="dashboard_left">
                    <p className='dashboard_title' style={{zIndex:"-50",position:"relative"}}>Sales Analysis</p>
                    <AreaChart />
                </div>
                <div className="dashboard_right">
                    <p className='dashboard_title' style={{zIndex:"-50",position:"relative"}}>--</p>
                    <DonutChart />
                </div>
            </div>
        </div>
        // <div>
        //     <div className="mainLayout">
        //         <div className="mainLayout_parent">
        //             {/* {modal === "saleDetail" && <ViewSalesDetail setModal={setModal} />} */}
        //             {/* <Sidebar index={"11"} /> */}
        //             <div className="dashboard">
        //                 <div className='dashboard_topBar'>
        //                     <div>
        //                         <p className="dashboard_title">Sales</p>
        //                     </div>
        //                     <div></div>
        //                 </div>
        //                 {/* <SalesTopCard data={data} /> */}
        //                 <p style={{ marginTop: "14px" }} className='dashboard_tableHead'>Sales Overview</p>
        //                 <div className='dashboard_salesGrid'>
        //                     <div className='child'>
        //                         <AreaChart />
        //                     </div>
        //                     <div style={{ justifyContent: "left" }} className='child'>
        //                         <DonutChart />
        //                     </div>
        //                 </div>
        //                 {/* <div className='dashboard_topBar'>
        //                 <div>
        //                     <p style={{ marginTop: '20px' }} className='dashboard_tableHead'>Sales Data</p>
        //                 </div>
        //                 <div>
        //                     <div className='dashboard_inputWrap'>
        //                         <i class="fa-solid search fa-magnifying-glass"></i>
        //                         <input type="text" placeholder='Search Name & Email' />
        //                     </div>
        //                 </div>
        //             </div> */}
        //             </div>
        //         </div>
        //     </div>

        // </div>
    )
}


export default SalesAnalysisContent
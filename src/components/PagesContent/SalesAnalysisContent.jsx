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
import SalesAnalysisChart from '../Graph/SalesAnalysisChart '
function SalesAnalysisContent() {

    const [modal, setModal] = useState()
    const [filterView, setFilterView] = useState("All")
    // const [obj] = useState()
    // const navigate = useNavigate()
    // const roles = useUserRole();
    const data = [
        {
            text: "This Month Sales",
            number: "$1977.00",
            pic: totalVendorImg,
        },
        {
            text: "Last Month Sales",
            number: "$200.00",
            pic: totalCustomersImg,
        },
        {
            text: "Highest Selling Product",
            number: "Storm Fiber",
            pic: totalVendorImg,
        },
        {
            text: "Least Selling Product",
            number: "Sony",
            pic: totalVendorImg,
        },
    ];

    const salesData = [
        { name: 'Product A', sales: 1000, commission: "3.4%", price: 45 },
        { name: 'Product B', sales: 800, commission: "4%", price: 45 },
        { name: 'Product C', sales: 1200, commission: "6%", price: 45 },
        { name: 'Product D', sales: 1000, commission: "2.3%", price: 45 },
        { name: 'Product E', sales: 800, commission: "3%", price: 45 },
        // Add more data as needed
    ];

    const month = ["All", "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    return (
        <div className="dashboard">
            <p className="dashboard_title">Sales Analysis</p>
            <DashboardTopCards data={data} />
            <div className="dashboard_content">
                <div className="dashboard_left">
                    <p className='dashboard_title' style={{ zIndex: "-50", position: "relative" }}>Sales Analysis</p>
                    <SalesAnalysisChart data={salesData} />
                </div>
                <div style={{ overflow: "auto" }} className="dashboard_right">
                    <p className='dashboard_title' style={{ zIndex: "-50", position: "relative" }}>--</p>
                    <DonutChart />
                </div>
            </div>
            <div className='dashboard_graphParent' style={{ marginTop: '48px', width: '100%' }}>
                <div className='dashboard_graphGrid'>
                    <h2>Sales Overview</h2>
                    <select onChange={(e) => setFilterView(e?.target?.value)}>
                        {month?.map((item) => {
                            return (
                                <option value={item}>{item}</option>
                            )
                        })}
                    </select>
                </div>
                <AreaChart filterView={filterView} data={salesData} />
            </div>
        </div>
    )
}


export default SalesAnalysisContent
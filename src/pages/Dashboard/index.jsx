import React from 'react'
import Sidebar from '../../components/Sidebar'
import DashboardTopCards from '../../components/DashboardTopCards'
// import Footer from '../../components/Footer';
import starImg from "../../assets/images/Admin-20 (82).png"
import userImg from "../../assets/images/Admin-20 (83).png"
import qImg from "../../assets/images/Admin-20 (84).png"
import tickImg from "../../assets/images/Admin-20 (85).png"
import MainServiceSection from '../../components/MainServiceSection'
import OrdersTab from '../../components/OrdersTab'
import OrdersCard from '../../components/OrdersCard'

const Dashboard = () =>
{
    const data = [
        {
            text: "Total Users",
            number: 19,
            pic: starImg,
        },
        {
            text: "Total Services",
            number: 35,
            pic: userImg,
        },
        {
            text: "Ongoing Orders",
            number: 11,
            pic: qImg,
        },
        {
            text: "Today’s Queries",
            number: 5,
            pic: tickImg,
        },
    ];
    return (
        <div>
            <div className="mainLayout">
                <div className="mainLayout_parent">
                    <Sidebar index={"1"} />
                    <div className="dashboard">
                        <p className="dashboard_title">Dashboard</p>
                        <DashboardTopCards data={data} />
                        <div className="dashboard_content">
                            <div className="dashboard_left">
                                <p className='dashboard_title'>Services</p>
                                <MainServiceSection />
                            </div>
                            <div className="dashboard_right">
                                <p className='dashboard_title'>Orders</p>
                                <OrdersTab />
                                <div className="order">
                                    <OrdersCard />
                                    <OrdersCard />
                                    <OrdersCard />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
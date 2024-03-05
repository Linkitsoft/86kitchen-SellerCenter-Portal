import React from 'react'
import Sidebar from '../../components/Sidebar'
import DashboardTopCards from '../../components/DashboardTopCards'
// import Footer from '../../components/Footer';

import MainServiceSection from '../../components/MainServiceSection'
import OrdersTab from '../../components/OrdersTab'
import OrdersCard from '../../components/OrdersCard'
import { dashboardData } from '../../util/dashboardData'

const Dashboard = () =>
{
   
    return (
        <div>
            <div className="mainLayout">
                <div className="mainLayout_parent">
                    <Sidebar index={"1"} />
                    <div className="dashboard">
                        <p className="dashboard_title">Dashboard</p>
                        <DashboardTopCards data={dashboardData} />
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
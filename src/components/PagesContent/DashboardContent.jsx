import React from 'react'
import DashboardTopCards from '../../components/DashboardTopCards'
import MainServiceSection from '../../components/MainServiceSection'
import OrdersTab from '../../components/OrdersTab'
import { dashboardData } from '../../utils/dashboardData'
import SingleOrderSection from '../SingleOrderSection'

const DashboardContent = () =>
{
    return (
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
                        <div className="order_page" style={{ height: "calc(100vh - 200px)" }}>
                            <SingleOrderSection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardContent
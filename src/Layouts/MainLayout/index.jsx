import React from 'react'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const Mainlayout = () =>
{
    return (
        <div>
            <div className="mainLayout">
                <div className="mainLayout_parent">
                    <Sidebar index={"1"} />
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Mainlayout
import React from 'react'
import Sidebar from '../../components/Sidebar'
import MainServiceSection from '../../components/MainServiceSection'

const Services = () =>
{
    return (
        <div>
            <div className="mainLayout">
                <div className="mainLayout_parent">
                    <Sidebar index={"2b"} />
                    <div className="dashboard">
                        <div className="dashboard_header">
                            <p className='dashboard_title'>Services</p>
                            <button>+ Add Service</button>
                        </div>
                        <MainServiceSection fullView />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
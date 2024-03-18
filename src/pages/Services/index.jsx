import React from 'react'
import MainServiceSection from '../../components/MainServiceSection'
import { useNavigate } from 'react-router-dom'

const Services = () =>
{
    const navigate = useNavigate()

    return (
        <div className="dashboard">
            <div className="dashboard_header">
                <p className='dashboard_title'>Services</p>
                <button onClick={() => navigate("/addService")}>+ Add Service</button>
            </div>
            <MainServiceSection fullView />
        </div>
    )
}

export default Services
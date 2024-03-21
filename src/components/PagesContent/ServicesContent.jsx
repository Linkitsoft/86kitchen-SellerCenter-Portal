import React from 'react'
import MainServiceSection from '../MainServiceSection'
import { useNavigate } from 'react-router-dom'
import RoleAccess from '../RoleAccess'
import useUserRole from '../../hooks/useUserRole'

const ServicesContent = () =>
{
    const navigate = useNavigate()
    const roles = useUserRole()
    return (
        <div className="dashboard">
            <div className="dashboard_header">
                <p className='dashboard_title'>Services</p>
                <RoleAccess role={roles.create}>
                    <button onClick={() => navigate("/addService")}>+ Add Service</button>
                </RoleAccess>
            </div>
            <MainServiceSection fullView />
        </div>
    )
}

export default ServicesContent
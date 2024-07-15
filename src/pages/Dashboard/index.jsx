import React from 'react'
import DashboardContent from '../../components/PagesContent/DashboardContent'
import { useUserDetails } from '../../context/profileContext'
import VerifyAccountContent from '../../components/PagesContent/VerifyAccountContent'
import Loader from '../../components/Loader'

const Dashboard = () =>
{
    const { userDetails } = useUserDetails()
    if(!userDetails?.id) return <Loader />
    return (
        (userDetails?.status === 0 || userDetails?.status === 1)  ? <VerifyAccountContent /> : <DashboardContent />
    )
}

export default Dashboard
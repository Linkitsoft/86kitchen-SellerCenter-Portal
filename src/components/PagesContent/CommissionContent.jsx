import React, { useEffect, useState } from 'react'
import CommissionSalesTable from '../Tables/Commission&SalesTable'
import { GetCommission } from '../../Services/Partner'
import Spinner from '../Loader/Spinner'
import NoDataFound from '../NoDataFound/NoDataFound'

const CommissionContent = () =>
{
    const [commissionData, setCommissionData] = useState([])
    const [loader, setLoader] = useState(false)

    const getCommissionDetails = async () =>
    {
        try
        {
            setLoader(true)
            const res = await GetCommission()
            setCommissionData(res?.data?.data)
        } catch (error)
        {
            setLoader(false)

        } finally
        {
            setLoader(false)

        }
    }

    useEffect(() =>
    {
        getCommissionDetails()
    }, [])

    return (
        <div className="dashboard">
            <div className="dashboard_header">
                <p className='dashboard_title'>All Sales and Commissions</p>
            </div>
            {loader ? <Spinner /> :
                <div className="dashboard_queries">
                    {commissionData?.length > 0 ? <CommissionSalesTable commissionData={commissionData} /> :
                        <div className="dashboard_noData">
                            <NoDataFound />
                        </div>}
                </div>}
            {/* <div className="sales_bottom">
                <p className="">Total commission to be paid</p>
                <p className="">$300</p>
            </div> */}
        </div>
    )
}

export default CommissionContent
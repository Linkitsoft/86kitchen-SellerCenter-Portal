import React, { useEffect, useState } from 'react'
import { GetOrder } from '../../Services/Partner'
import OrdersCard from '../OrdersCard'
import Spinner from '../Loader/Spinner'
import NoDataFound from '../NoDataFound/NoDataFound'

const SingleOrderSection = () =>
{
    const [ordersData, setOrdersData] = useState([])
    const [loader, setLoader] = useState(false)

    const getOrderData = async () =>
    {
        setLoader(true)
        try
        {
            const res = await GetOrder()
            setOrdersData(res?.data?.data)

        } catch (error)
        {

        } finally
        {
            setLoader(false)
        }
    }

    useEffect(() =>
    {
        getOrderData()
    }, [])

    return loader ? <Spinner /> :
            ordersData?.length > 0 ? [1,2,3,4,5]?.map((item) => (
                <OrdersCard item={item} key={item?.id} />
            )): <NoDataFound />}

export default SingleOrderSection
import React, { useEffect, useState } from 'react'
import { GetOrder } from '../../Services/Partner'
import OrdersCard from '../OrdersCard'
import Spinner from '../Loader/Spinner'
import NoDataFound from '../NoDataFound/NoDataFound'

const SingleOrderSection = ({fromOrders}) =>
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


    return loader ? <div className='order_noData'><Spinner /></div> :
        ordersData?.length > 0 ? ordersData?.map((item) => (
            <OrdersCard item={item} key={item?.id} />

        )) : <div className={`order_noData ${fromOrders && 'top'}`}>
            <NoDataFound />
        </div>
}

export default SingleOrderSection
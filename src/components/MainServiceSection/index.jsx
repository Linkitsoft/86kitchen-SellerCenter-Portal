import React, { useEffect, useState } from 'react'
import ServiceCard from '../ServiceCard';
import ViewService from '../Modals/ViewService';
import ServiceSwiper from '../Swipers/ServiceSwiper';
import { GetAllCategory, GetPartnerServices } from '../../Services/Partner';
import Spinner from '../Loader/Spinner';
import NoDataFound from '../NoDataFound/NoDataFound';

// import { sportData } from '../../utils/sportData'

const MainServiceSection = ({ fullView }) =>
{
    const [clickIndex, setClickIndex] = useState("All")
    const [modal, setModal] = useState('')

    const [categories, setCategories] = useState([])
    const [services, setServices] = useState([])
    const [loader, setLoader] = useState(false)
    const [categoryId, setCategoryId] = useState("")

    const getCategoryData = async () =>
    {
        const res = await GetAllCategory()
        setCategories(res?.data?.data)
    }

    const getServices = async () =>
    {
        try
        {
            setLoader(true)
            const res = await GetPartnerServices({ categoryId })
            setServices(res?.data?.data)
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
        getServices()
        // eslint-disable-next-line
    }, [categoryId])

    useEffect(() =>
    {
        getCategoryData()
    }, [])

    return (
        <div className='eventsSection' style={{ height: fullView ? "calc(100vh - 227px)" : "calc(100vh - 347px)" }}>
            {modal === 'view' && <ViewService setModal={setModal} />}

            <div className='eventsSection_swiperWrap'>
                <ServiceSwiper setCategoryId={setCategoryId} clickIndex={clickIndex} setClickIndex={setClickIndex} eventData={categories} />
            </div>
            {loader ? <Spinner /> :
                <div className="eventsSection_cards">
                    {services?.length > 0 ? services?.map((item, index) => <ServiceCard key={index} item={item} setModal={setModal} />)
                        : <div className='eventsSection_noData'><NoDataFound /></div>}
                </div>}

        </div>
    )
}

export default MainServiceSection
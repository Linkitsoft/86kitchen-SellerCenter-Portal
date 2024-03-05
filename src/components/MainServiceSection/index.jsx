import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ServiceCard from '../ServiceCard';
import { eventData } from '../../util/eventData';
import { cardData } from '../../util/cardData';
import ViewService from '../Modals/ViewService';

// import { sportData } from '../../utils/sportData'

const MainServiceSection = ({ fullView }) =>
{
    const [clickIndex, setClickIndex] = useState("All")
    const [modal, setModal] = useState('')

    return (
        <div className='eventsSection' style={{ maxHeight: fullView ? "calc(100vh - 227px)" : "calc(100vh - 347px)" }}>
            {modal === 'view' && <ViewService setModal={setModal} />}

            <div className='eventsSection_swiperWrap'>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div onClick={() => setClickIndex("All")} className={clickIndex === "All" ? "eventsSection_optionSelect" : 'eventsSection_option'}>
                            <p>All</p>
                        </div>
                    </SwiperSlide>
                    {eventData?.map((item, index) =>
                    {
                        return (
                            <SwiperSlide>
                                <div onClick={() => { setClickIndex(index) }} className={clickIndex === index ? "eventsSection_optionSelect" : 'eventsSection_option'}>
                                    <p>{item?.name}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <div className="eventsSection_cards">
                {
                    cardData.map((item, index) =>
                    {
                        return (
                            <ServiceCard key={index} item={item} setModal={setModal} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default MainServiceSection
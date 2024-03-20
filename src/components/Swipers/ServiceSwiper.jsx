import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const ServiceSwiper = ({ clickIndex, setClickIndex, eventData }) =>
{
    return (
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
                    <SwiperSlide key={index}>
                        <div onClick={() => { setClickIndex(index) }} className={clickIndex === index ? "eventsSection_optionSelect" : 'eventsSection_option'}>
                            <p>{item?.name}</p>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default ServiceSwiper
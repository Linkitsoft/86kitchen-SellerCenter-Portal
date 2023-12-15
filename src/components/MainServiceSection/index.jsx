import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ServiceCard from '../ServiceCard';
import card1 from "../../assets/images/Admin-20 (22).png"
import card2 from "../../assets/images/Admin-20 (23).png"
import card3 from "../../assets/images/Admin-20 (24).png"
import card4 from "../../assets/images/Admin-20 (25).png"
import card5 from "../../assets/images/Admin-20 (26).png"

// import { sportData } from '../../utils/sportData'

const MainServiceSection = ({ fullView }) =>
{
    const [clickIndex, setClickIndex] = useState("All")

    const eventData = [
        {
            id: 1,
            name: "Internet Connection"
        },
        {
            id: 2,
            name: "900 MB"
        },
        {
            id: 3,
            name: "Mega Discount"
        },
        {
            id: 4,
            name: "100% Fiber"
        },
        {
            id: 5,
            name: "Internet Connection"
        },
        {
            id: 6,
            name: "900 MB"
        },
        {
            id: 7,
            name: "Mega Discount"
        },
        {
            id: 8,
            name: "100% Fiber"
        },
    ]
    const cardData = [ 
    {
        image: card1,
        title: "Limited Time Offers",
        cost: "$150",
        des: "Yellow Storm Triple Typhoon 20 Mbps - Month cost $50, Ont time cost $100",
        users: "30"
    },
    {
        image: card2,
        title: "Triple Play Promos",
        cost: "$150",
        des: "Yellow Storm Triple Typhoon 20 Mbps - Month cost $50, Ont time cost $100",
        users: "30"
    },
    {
        image: card3,
        title: "Double Play Promos",
        cost: "$150",
        des: "Yellow Storm Triple Typhoon 20 Mbps - Month cost $50, Ont time cost $100",
        users: "30"
    },
    {
        image: card4,
        title: "Limited Time Offers",
        cost: "$150",
        des: "Yellow Storm Triple Typhoon 20 Mbps - Month cost $50, Ont time cost $100",
        users: "30"
    },
    {
        image: card5,
        title: "Triple Play Promos",
        cost: "$150",
        des: "Yellow Storm Triple Typhoon 20 Mbps - Month cost $50, Ont time cost $100",
        users: "30"
    },
    {
        image: card3,
        title: "Double Play Promos",
        cost: "$150",
        des: "Yellow Storm Triple Typhoon 20 Mbps - Month cost $50, Ont time cost $100",
        users: "30"
    },
    {
        image: card2,
        title: "Triple Play Promos",
        cost: "$150",
        des: "Yellow Storm Triple Typhoon 20 Mbps - Month cost $50, Ont time cost $100",
        users: "30"
    },
    {
        image: card3,
        title: "Double Play Promos",
        cost: "$150",
        des: "Yellow Storm Triple Typhoon 20 Mbps - Month cost $50, Ont time cost $100",
        users: "30"
    },
    {
        image: card4,
        title: "Limited Time Offers",
        cost: "$150",
        des: "Yellow Storm Triple Typhoon 20 Mbps - Month cost $50, Ont time cost $100",
        users: "30"
    },
    {
        image: card5,
        title: "Triple Play Promos",
        cost: "$150",
        des: "Yellow Storm Triple Typhoon 20 Mbps - Month cost $50, Ont time cost $100",
        users: "30"
    },
    {
        image: card3,
        title: "Double Play Promos",
        cost: "$150",
        des: "Yellow Storm Triple Typhoon 20 Mbps - Month cost $50, Ont time cost $100",
        users: "30"
    },
    {
        image: card2,
        title: "Triple Play Promos",
        cost: "$150",
        des: "Yellow Storm Triple Typhoon 20 Mbps - Month cost $50, Ont time cost $100",
        users: "30"
    },
    {
        image: card3,
        title: "Double Play Promos",
        cost: "$150",
        des: "Yellow Storm Triple Typhoon 20 Mbps - Month cost $50, Ont time cost $100",
        users: "30"
    },
    {
        image: card4,
        title: "Limited Time Offers",
        cost: "$150",
        des: "Yellow Storm Triple Typhoon 20 Mbps - Month cost $50, Ont time cost $100",
        users: "30"
    },
    {
        image: card5,
        title: "Triple Play Promos",
        cost: "$150",
        des: "Yellow Storm Triple Typhoon 20 Mbps - Month cost $50, Ont time cost $100",
        users: "30"
    },
    {
        image: card3,
        title: "Double Play Promos",
        cost: "$150",
        des: "Yellow Storm Triple Typhoon 20 Mbps - Month cost $50, Ont time cost $100",
        users: "30"
    },
]
    return (
        <div className='eventsSection' style={{maxHeight: fullView ? "calc(100vh - 227px)" : "calc(100vh - 347px)"}}>
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
                    cardData.map((item, index) => {
                        return (
                            <ServiceCard key={index} item={item}/>
                        )
                    })
                }
            </div>
           
        </div>
    )
}

export default MainServiceSection
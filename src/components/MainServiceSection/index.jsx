import React, { useState } from 'react'
import ServiceCard from '../ServiceCard';
import { eventData } from '../../utils/eventData';
import { cardData } from '../../utils/cardData';
import ViewService from '../Modals/ViewService';
import ServiceSwiper from '../Swipers/ServiceSwiper';

// import { sportData } from '../../utils/sportData'

const MainServiceSection = ({ fullView }) =>
{
    const [clickIndex, setClickIndex] = useState("All")
    const [modal, setModal] = useState('')

    return (
        <div className='eventsSection' style={{ maxHeight: fullView ? "calc(100vh - 227px)" : "calc(100vh - 347px)" }}>
            {modal === 'view' && <ViewService setModal={setModal} />}

            <div className='eventsSection_swiperWrap'>
               <ServiceSwiper clickIndex={clickIndex} setClickIndex={setClickIndex} eventData={eventData}/>
            </div>
            <div className="eventsSection_cards">
                {cardData.map((item, index) => <ServiceCard key={index} item={item} setModal={setModal} />)}
            </div>

        </div>
    )
}

export default MainServiceSection
import React from 'react'

const ReviewCard = () =>
{
    function generateStars(num)
    {
        const starsArray = Array.from({ length: num }, (_, index) => (
            <i key={index} className="fa-solid fa-star"></i>
        ));

        return <div>{starsArray}</div>;
    }

    return (
        <div className='dashboard_reviewMain'>
            <div className='dashboard_reviewTop'>
                <p className='name'>Giselia P</p>
                <div>{generateStars(4)}</div>
                <p className='time'>2 month ago</p>
            </div>
            <div className='dashboard_reviewText'>Amazing! product and services i am happy with these ! I’ve never bought before but now is amazing</div>
        </div>
    )
}

export default ReviewCard
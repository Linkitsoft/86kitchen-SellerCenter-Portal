import React from 'react'
import ReviewCard from '../../components/ReviewCard'

const Reviews = () =>
{

    return (
        <div className="dashboard">
            <p className='dashboard_title'>Reviews</p>
            <div className="dashboard_review">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
        </div>
    )
}

export default Reviews
import React from 'react'
import ReviewCard from '../ReviewCard'

const ReviewsContent = () =>
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

export default ReviewsContent
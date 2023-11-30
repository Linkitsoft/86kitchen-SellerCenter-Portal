import React from 'react'
import Sidebar from '../../components/Sidebar'
import ReviewCard from '../../components/ReviewCard'

const Reviews = () =>
{

    return (
        <div>
            <div className="mainLayout">
                <div className="mainLayout_parent">
                    <Sidebar index={"3"} />
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
                </div>
            </div>
        </div>
    )
}

export default Reviews
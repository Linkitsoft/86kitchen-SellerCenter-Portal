import React from 'react'
import Sidebar from '../../components/Sidebar'

const Profile = () =>
{


    return (
        <div>
            <div className="mainLayout">
                <div className="mainLayout_parent">
                    <Sidebar index={"5"} />
                    <div className="dashboard">
                        <p className='dashboard_title'>Profile</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
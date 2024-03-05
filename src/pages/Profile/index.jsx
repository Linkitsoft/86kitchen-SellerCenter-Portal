import React from 'react'
import Sidebar from '../../components/Sidebar'
import ProfileContent from '../../components/ProfileContent'

const Profile = () =>
{

    return (
        <div>
            <div className="mainLayout">
                <div className="mainLayout_parent">
                    <Sidebar index={"6"} />
                    <ProfileContent />
                </div>
            </div>
        </div>
    )
}

export default Profile
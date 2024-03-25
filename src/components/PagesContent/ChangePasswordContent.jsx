import React from 'react'
import ChangePasswordForm from '../Forms/ChangePasswordForm'
import HidePage from '../../hoc/HidePage';

const ChangePasswordContent = () =>
{
     return (
        <HidePage>
            <div className="dashboard">
                <p className="dashboard_title">Change Password</p>
                <ChangePasswordForm />
            </div>
        </HidePage>
    )
}

export default ChangePasswordContent
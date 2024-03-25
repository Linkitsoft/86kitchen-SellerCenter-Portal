import React from 'react'
import ChangePasswordForm from '../Forms/ChangePasswordForm'
import Loader from '../../Layouts/Loader';
import useHidePage from '../../hooks/useHidePage';

const ChangePasswordContent = () =>
{
    const { shouldRender } = useHidePage();

    if (!shouldRender) {
       return <Loader />;
   }

    return (
        <div className="dashboard">
            <p className="dashboard_title">Change Password</p>
            <ChangePasswordForm />
        </div>
    )
}

export default ChangePasswordContent
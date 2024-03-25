import React from 'react'
import AddObservantUserForm from '../Forms/AddObservantUserForm'
import backImg from "../../assets/images/back.png"

const AddObservantUserContent = () =>
{
    
    // handle back
    const handleBack = () =>
    {
        window.history.back()
    }

    return (
        <div className="dashboard">
            <div className="dashboard_topBar">
                <div>
                    <p className="dashboard_title">
                    <img onClick={handleBack} className='dashboard_backImg' src={backImg} alt="backImg" /> Add Observant User</p>
                </div>
                <div>
                </div>
            </div>
            <div className="createUser">
                <AddObservantUserForm />
            </div>
        </div>
    )
}

export default AddObservantUserContent
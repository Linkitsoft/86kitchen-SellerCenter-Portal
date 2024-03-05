import React from 'react'
import Sidebar from '../../components/Sidebar'
import AddServiceForm from '../../components/Forms/AddServiceForm'

const AddService = () =>
{
    return (
        <div>
            <div className="mainLayout">
                <div className="mainLayout_parent">
                    <Sidebar index={"2b"} />
                    <div className="verify">
                    <AddServiceForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddService

import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Thankyou from '../../components/Modals/Thankyou'
import EditServiceForm from '../../components/Forms/EditServiceForm'

const EditService = () =>
{
    const [modal, setModal] = useState("");

    return (
        <div>
            <div className="mainLayout">
                {modal === 'verify' && <Thankyou setModal={setModal} />}
                <div className="mainLayout_parent">
                    <Sidebar index={"2b"} />
                    <div className="verify">
                       <EditServiceForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditService

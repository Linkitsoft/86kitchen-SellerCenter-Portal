import React, { useState } from 'react'
import Thankyou from '../../components/Modals/Thankyou'
import EditServiceForm from '../../components/Forms/EditServiceForm'

const EditService = () =>
{
    const [modal, setModal] = useState("");

    return (
        <>
            {modal === 'verify' && <Thankyou setModal={setModal} />}
            <div className="verify">
                <EditServiceForm />
            </div>
        </>
    )
}

export default EditService

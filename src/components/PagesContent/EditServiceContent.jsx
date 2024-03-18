import React, { useState } from 'react'
import Thankyou from '../Modals/Thankyou'
import EditServiceForm from '../Forms/EditServiceForm'

const EditServiceContent = () =>
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

export default EditServiceContent

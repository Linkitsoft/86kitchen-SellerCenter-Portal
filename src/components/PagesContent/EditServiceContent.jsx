import React, { useState } from 'react'
import Thankyou from '../Modals/Thankyou'
import EditServiceForm from '../Forms/EditServiceForm'
import HidePage from '../../hoc/HidePage';

const EditServiceContent = () =>
{
    const [modal, setModal] = useState("");

    return (
        <HidePage>
            {modal === 'verify' && <Thankyou setModal={setModal} />}
            <div className="verify">
                <EditServiceForm />
            </div>
        </HidePage>
    )
}

export default EditServiceContent

import React, { useState } from 'react'
import Thankyou from '../Modals/Thankyou'
import EditServiceForm from '../Forms/EditServiceForm'
import HidePage from '../../hoc/HidePage';
import ChangeCommission from '../Modals/ChangeCommission';

const EditServiceContent = () =>
{
    const [modal, setModal] = useState("");

    return (
        <HidePage>
            {modal === 'verify' && <Thankyou setModal={setModal} />}
            {modal === 'commission' && <ChangeCommission setModal={setModal} />}
            <div className="verify">
                <EditServiceForm setModal={setModal} />
            </div>
        </HidePage>
    )
}

export default EditServiceContent

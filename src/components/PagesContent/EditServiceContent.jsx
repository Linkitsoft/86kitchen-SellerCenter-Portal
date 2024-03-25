import React, { useState } from 'react'
import Thankyou from '../Modals/Thankyou'
import EditServiceForm from '../Forms/EditServiceForm'
import useHidePage from '../../hooks/useHidePage';
import Loader from '../../Layouts/Loader';

const EditServiceContent = () =>
{
    const [modal, setModal] = useState("");
    const { shouldRender } = useHidePage();

     if (!shouldRender) {
        return <Loader />;
    }

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

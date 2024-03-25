import React from 'react'
import AddServiceForm from '../Forms/AddServiceForm'
import useHidePage from '../../hooks/useHidePage'
import Loader from '../Loader'

const AddServiceContent = () =>
{
    const { shouldRender } = useHidePage();

     if (!shouldRender) {
        return <Loader />;
    }

    return (
        <div className="verify">
            <AddServiceForm />
        </div>
    )
}

export default AddServiceContent
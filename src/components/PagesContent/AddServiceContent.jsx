import React from 'react'
import AddServiceForm from '../Forms/AddServiceForm'

const AddServiceContent = () =>
{
    // const { shouldRender } = useHidePage();

    // if (!shouldRender)
    // {
    //     return <Loader />;
    // }

    return (
            <div className="verify">
                <AddServiceForm />
            </div>
    )
}

export default AddServiceContent
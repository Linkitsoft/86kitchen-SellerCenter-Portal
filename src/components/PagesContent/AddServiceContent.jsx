import React from 'react'
import AddServiceForm from '../Forms/AddServiceForm'
import HidePage from '../../hoc/HidePage';

const AddServiceContent = () =>
{
    // const { shouldRender } = useHidePage();

    // if (!shouldRender)
    // {
    //     return <Loader />;
    // }

    return (
        <HidePage>
            <div className="verify">
                <AddServiceForm />
            </div>
        </HidePage>
    )
}

export default AddServiceContent